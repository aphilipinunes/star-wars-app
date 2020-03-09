import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {


  @Input() openModal = false;
  @Input() titleModal = '';
  @Input() messageModal = '';

  constructor() {}

  closeMOdal() {
    this.openModal = false;
  }

}
