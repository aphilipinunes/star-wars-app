import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCharactersComponent, CharactersComponent, DetailCharactersComponent } from './';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListCharactersComponent,
    CharactersComponent,
    DetailCharactersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class CharactersModule { }
