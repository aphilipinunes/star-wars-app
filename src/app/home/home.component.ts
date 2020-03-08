import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CharactersService } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    private charactersService: CharactersService
  ) {

  }

  ngOnInit(){
    this.dataTeste();
  }

  titlePage = 'Filmes';
  moviesList = true;
  movieObjectList: any = [];



  outputVoltar() {
    this.moviesList = true;
  }


  outputMoviesResumeShow(event) {
    this.movieObjectList = event;
    this.moviesList = false;
  }





  dataTeste() {

    let paramString = '?&page=1'

    this.charactersService.getCharacters(paramString).subscribe((data: any) => {

      console.log(data)

      this.dataSource = new MatTableDataSource(data.results);

      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;


    }, ex => {





    }).add(() => {

    });


  }




  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}






