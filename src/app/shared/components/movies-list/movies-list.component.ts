import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { listAnimation, fadeIn } from '../../utils';
import { MoviesService } from '../../services';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  animations: [
    listAnimation,
    fadeIn
  ]
})
export class MoviesListComponent implements OnInit {

  constructor(
    private moviesService: MoviesService
  ) { }

  loadComplete: boolean;
  moviesData = [];
  titleModal;
  messageModal;
  openModal;

  @Input() showMovieList = true;
  @Output() outputMoviesResumeShow = new EventEmitter<any>();
  @Input() moviesSectionTitle = '';


  ngOnInit(): void {
    this.moviesApi();
  }


  moviesApi() {
    this.loadComplete = false;

    this.moviesService.getMovies().subscribe((data: any) => {
      this.moviesData = data.results;
      this.showMovieList = true;
    }, ex => {

      this.openModal = true;
      this.messageModal = 'Por favor tente novamente mais tarde.';
      this.titleModal = 'Erro!';

    }).add(() => {
      this.loadComplete = true;
    });
  }



  moviesResumeContent(result) {
    const arrayList = {
      'image': 'assets/images/' + result.episode_id + '.jpg',
      'sinopse': result.opening_crawl,
      'title': result.title,
      'producer': result.producer,
      'director': result.director
    };


    this.outputMoviesResumeShow.emit(arrayList);

  }

}
