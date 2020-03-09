import { Component } from '@angular/core';
import { CharactersService } from '../shared';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {


  constructor() { }

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
}