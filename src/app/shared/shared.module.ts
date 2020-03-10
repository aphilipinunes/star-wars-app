import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HeaderComponent,
  LoadingComponent,
  MovieResumeComponent,
  MoviesListComponent,
  ModalComponent,
  TitleComponent,
  PaginationComponent
} from './';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent,
    ModalComponent,
    MovieResumeComponent,
    MoviesListComponent,
    TitleComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MovieResumeComponent,
    TitleComponent,
    MoviesListComponent,
    LoadingComponent,
    ModalComponent,
    PaginationComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
