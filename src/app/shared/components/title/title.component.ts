import { Component, Input } from '@angular/core';
import { fadeIn } from '../../utils';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  animations: [
    fadeIn
  ]
})
export class TitleComponent {

  constructor() { }

  @Input() titlePage;

}
