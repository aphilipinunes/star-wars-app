import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HeaderComponent,
  LoadingComponent,
  MovieResumeComponent,
  MoviesListComponent,
  ModalComponent,
  TitleComponent
} from './';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent,
    ModalComponent,
    MovieResumeComponent,
    MoviesListComponent,
    TitleComponent
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
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
