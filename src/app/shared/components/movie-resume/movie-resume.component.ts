import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fadeIn } from '../../utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-resume',
  templateUrl: './movie-resume.component.html',
  styleUrls: ['./movie-resume.component.scss'],
  animations: [
    fadeIn
  ]
})
export class MovieResumeComponent implements OnInit {

  constructor(private router: Router) { }


  @Input() movieObjectList;
  @Input() showMovieResume = true;
  @Output() outputVoltar = new EventEmitter<any>();


  ngOnInit(): void {
  }


  back() {
    this.outputVoltar.emit();
  }

  charactersPage() {
    this.router.navigate(['/characters']);
  }


}
