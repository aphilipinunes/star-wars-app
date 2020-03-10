import { Component, ViewChild, OnInit } from '@angular/core';
import { fadeIn, CharactersService, PaginationComponent } from '../../shared';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss'],
  animations: [
    fadeIn
  ],
})

export class ListCharactersComponent implements OnInit {

  @ViewChild(PaginationComponent, {static: true}) pChild: PaginationComponent;


  data: any = [];
  loadComplete = false;
  loadPageCharacters = false;
  inputFilters;
  titleModal;
  messageModal;
  openModal;


  atualPage = 1;
  totalPagination;
  pageSize = 10;
  pagination = [];


  charactersForm: FormGroup;
  titlePage = 'Personagens';

  constructor(
    private charactersService: CharactersService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit(): void {


    this.charactersForm = this.formBuilder.group({
      inputCaracterName: [''],
    });

    this.searchFilterCaracters();

  }


  // for easy access to form fields
  get fields() { return this.charactersForm.controls; }


  async searchFilterCaracters(page?) {


    this.loadComplete = false;
    let paramString = '';
    let filterValue = this.fields.inputCaracterName.value.trim();
    filterValue = filterValue.toLowerCase();


    if (page !== undefined) {
      // pagination
      paramString = '?search=' + filterValue + '&page=' + page;

      if (this.atualPage === page) {
        this.loadComplete = true;
        return;
      }
      this.atualPage = page;

    } else {
      // busca por nome ou outros filtros
      this.inputFilters = '';
      this.atualPage = (page === undefined ? 1 : page);
      paramString = '?search=' + filterValue;
    }


    this.charactersService.getCharacters(paramString).subscribe(async (data: any) => {

      this.data = data.results;
      this.loadPageCharacters = true;

      if (this.atualPage === 1) {
        this.totalPagination = Math.ceil(data.count / (data.results.length < 10 ? data.results.length : this.pageSize));
      }

    }, ex => {
      this.loadPageCharacters = false;

      this.openModal = true;
      this.messageModal = 'Por favor tente novamente mais tarde.';
      this.titleModal = 'Erro!';



    }).add(() => {
      this.loadComplete = true;
    });

    setTimeout(() => {
      this.pChild.paginationLogic();
    }, 1500);
  }

  detailsPage(obj) {
    this.charactersService.characterDetails = obj;
    this.router.navigate(['/characters/detail']);
  }

  onChange(newValue) {
    if (newValue.length > 0) {
      this.pagination = [];

    } else {
      console.log('asd');
      this.pChild.paginationLogic();
    }
    this.inputFilters = newValue;

  }


}


