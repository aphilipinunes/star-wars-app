import { Component, OnInit } from '@angular/core';
import { CharactersService, fadeIn } from 'src/app/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-characters',
  templateUrl: './detail-characters.component.html',
  styleUrls: ['./detail-characters.component.scss'],
  animations: [
    fadeIn
  ]
})
export class DetailCharactersComponent implements OnInit {

  dataSource;
  moviesList = true;
  movieObjectList = false;
  titlePage;
  moviesSectionTitle = 'Filmes que participou';

  constructor(
    private charactersService: CharactersService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.dataSource = this.charactersService.characterDetails;

    if (Array.isArray(this.dataSource)) {
      this.back();
    } else {
      this.titlePage = this.dataSource.name;
    }

  }


  outputMoviesResumeShow(event) {
    this.movieObjectList = event;
    this.moviesList = false;
  }


  back() {
    this.router.navigate(['/characters']);
  }

  outputVoltar() {
    this.moviesList = true;
  }

}
