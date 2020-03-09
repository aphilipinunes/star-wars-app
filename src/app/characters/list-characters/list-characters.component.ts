import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { fadeIn, CharactersService, ModalComponent } from '../../shared';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
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
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender', 'details'];
  data: any = [];
  loadComplete = false;
  loadPageCharacters = false;

  pageEvent: PageEvent;
  pageIndex = [10, 20];
  pageSize = 10;
  totalCharacters: number;
  charactersForm: FormGroup;
  titlePage = 'Personagens';

  constructor(
    private charactersService: CharactersService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }



  ngAfterViewInit(): void {

    this.data.paginator = this.paginator;

    this.charactersForm = this.formBuilder.group({
      inputCaracterName: [''],
    });

    this.searchFilterCaracters();

  }


  // for easy access to form fields
  get fields() { return this.charactersForm.controls; }


  searchFilterCaracters(event?: PageEvent) {
    this.loadComplete = false;
    let paramString = '';
    let obj;
    let filterValue = this.fields.inputCaracterName.value.trim();
    filterValue = filterValue.toLowerCase();


    if (event !== undefined) {
      // paginacao

      paramString = '?search=' + filterValue + '&page=';
      obj = event !== undefined ? paramString + Number(event.pageIndex + 1) : paramString + 1;

    } else {
      // busca por nome ou outros filtros

      obj = '?search=' + filterValue;
      this.data.paginator = this.paginator;
    }


    console.log(this.paginator.pageSize);
    // if(this.paginator.pageSize == 20){



    // }



    this.charactersService.getCharacters(obj).subscribe((data: any) => {

      this.totalCharacters = data.count;

      this.data = new MatTableDataSource(data.results);
      this.loadPageCharacters = true;
      this.pageSize = this.data.length;



    }, ex => {

      this.dialog.open(ModalComponent, {
        data: {
          message: 'Erro: Por favor tente novamente mais tarde!',
          buttonText: {
            cancel: 'Ok'
          }
        },
      });


    }).add(() => {

      this.loadComplete = true;
    });




    return event;

  }

  detailsPage(obj) {

    this.charactersService.characterDetails = obj;

    this.router.navigate(['/characters/detail']);


  }


  applyFilter(filterValue: string) {

    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.data.filter = filterValue;
  }

}


