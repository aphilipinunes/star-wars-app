import { Component, OnInit, Input } from '@angular/core';
import { fadeOut } from '../../utils';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [
    fadeOut
  ]
})
export class LoadingComponent implements OnInit {
  @Input() loadComplete;

  constructor() { }

  ngOnInit(): void {
  }

}
