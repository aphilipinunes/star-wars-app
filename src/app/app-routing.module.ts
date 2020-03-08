import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { ListCharactersComponent, CharactersComponent, DetailCharactersComponent } from './characters';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },


  {
    path: 'characters', component: CharactersComponent,
    children: [
      { path: '', redirectTo: '/characters/list', pathMatch: 'full' },
      { path: 'list', component: ListCharactersComponent },
      { path: 'detail', component: DetailCharactersComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
