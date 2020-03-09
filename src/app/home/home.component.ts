import { Component, AfterViewInit } from '@angular/core';
import { CharactersService } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor(
    private charactersService: CharactersService
  ) {

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
}
