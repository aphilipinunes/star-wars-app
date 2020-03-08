import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  api = environment.api;
  characters;

  constructor(private http: HttpClient) { }

  getMovies(id?) {
    return this.http.get(this.api + 'films/' + (id !== undefined ? id : ''));
  }
}
