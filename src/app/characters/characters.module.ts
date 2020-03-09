import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCharactersComponent, CharactersComponent, DetailCharactersComponent } from './';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FilterPipe } from '../shared';



@NgModule({
  declarations: [
    ListCharactersComponent,
    CharactersComponent,
    DetailCharactersComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class CharactersModule { }
