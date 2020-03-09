import { Component, AfterViewInit } from '@angular/core';
import { fadeIn, CharactersService, ModalComponent } from '../../shared';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss'],
  animations: [
    fadeIn
  ]
})

export class ListCharactersComponent implements AfterViewInit {

  data: any = [];
  loadComplete = false;
  loadPageCharacters = false;
  pagination = [];
  filtersAdvanced;
  titleModal;
  messageModal;
  openModal;

  pageSize = 10;
  atualPage = 1;
  totalPagination;
  charactersForm: FormGroup;
  titlePage = 'Personagens';

  constructor(
    private charactersService: CharactersService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngAfterViewInit(): void {


    this.charactersForm = this.formBuilder.group({
      inputCaracterName: [''],
    });

    this.searchFilterCaracters();

  }


  // for easy access to form fields
  get fields() { return this.charactersForm.controls; }


  searchFilterCaracters(page?) {


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

      this.atualPage = (page === undefined ? 1 : page);
      paramString = '?search=' + filterValue;
    }


    this.charactersService.getCharacters(paramString).subscribe((data: any) => {

      this.data = data.results;
      this.loadPageCharacters = true;

      if (this.atualPage === 1) {

        this.totalPagination = Math.ceil(data.count / (data.results.length < 10 ? data.results.length : this.pageSize));

      }

      this.paginationLogic();


    }, ex => {
      this.loadPageCharacters = false;

      this.openModal = true;
      this.messageModal = 'Por favor tente novamente mais tarde.';
      this.titleModal = 'Erro!';



    }).add(() => {

      this.loadComplete = true;
    });

  }

  detailsPage(obj) {

    this.charactersService.characterDetails = obj;
    this.router.navigate(['/characters/detail']);

  }


  paginationLogic() {

    this.pagination = [];


    if (this.totalPagination < 2) {
      // SEM NECESSIDADE DE pagination
      this.pagination = [];

    } else {
      if (this.totalPagination >= this.atualPage + 3) {
        // pagination FINAL

        if (this.atualPage >= 5) {
          this.pagination = [this.atualPage - 2, this.atualPage - 1, this.atualPage, this.atualPage + 1, this.atualPage + 2];
        } else {
          if (this.totalPagination >= 5) {
            this.pagination = Array.from({ length: 5 }, (v, k) => k + 1);
          } else {

            this.pagination = Array.from({ length: this.totalPagination }, (v, k) => k + 1);
          }

        }

      } else {

        // pagination INICIAL
        if (this.atualPage < 5) {
          if (this.totalPagination <= 5) {
            this.pagination = Array.from({ length: this.totalPagination }, (v, k) => k + 1);
          } else {
            this.pagination = [1, 2, 3, 4, 5];
          }

        } else {
          this.pagination = [
            this.totalPagination - 4,
             this.totalPagination - 3,
             this.totalPagination - 2,
             this.totalPagination - 1,
             this.totalPagination
          ];

        }
      }
    }
  }

}


