import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { listAnimation, fadeIn } from '../../utils';
import { HomeService } from '../../services';
import { ModalComponent } from '../modal';

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
    private homeService: HomeService,
    private dialog: MatDialog
    ) { }

  loadComplete: boolean;
  moviesData = [];
  @Input() showMovieList = true;
  @Output() outputMoviesResumeShow = new EventEmitter<any>();
  @Input() moviesSectionTitle = '';

  ngOnInit(): void {
    this.moviesApi();

  }


  moviesApi() {
    this.loadComplete = false;

    this.homeService.getMovies().subscribe((data: any) => {
      this.moviesData = data.results;
      this.showMovieList = true;
    }, ex => {
      console.log(ex);
      this.dialog.open(ModalComponent, {
        data: {
          message: 'Erro na api: Por favor tente novamente mais tarde!',
          buttonText: {
            cancel: 'Ok'
          }
        },
      });


    }).add(() => {
      this.loadComplete = true;
    });
  }



  moviesResumeContent(result) {
    const arrayList = {
      'image': '../../assets/images/' + result.episode_id + '.jpg',
      'sinopse': result.opening_crawl,
      'title': result.title,
      'producer': result.producer,
      'director': result.director
    };


    this.outputMoviesResumeShow.emit(arrayList);

  }

}
