import { Component } from '@angular/core';
import { fadeIn } from './shared';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeIn
  ]
})

export class AppComponent {
  title = 'star-wars-app';
}
