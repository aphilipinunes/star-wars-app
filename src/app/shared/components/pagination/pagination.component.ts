import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pageSize;
  @Input() atualPage;
  @Input() totalPagination;
  @Input() pagination;

  @Output() outputPagination = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }


  paginationLogic() {
    console.log(1);
    this.pagination = [];

    if (this.totalPagination < 2) {
      // SEM NECESSIDADE DE pagination
      this.pagination = [];

    } else {
      if (this.totalPagination >= this.atualPage + 3) {
        // pagination FINAL

        if (this.atualPage >= 5) {
          this.pagination = [this.atualPage - 2, this.atualPage - 1, this.atualPage, this.atualPage + 1, this.atualPage + 2];
        } else {
          if (this.totalPagination >= 5) {
            this.pagination = Array.from({ length: 5 }, (v, k) => k + 1);
          } else {

            this.pagination = Array.from({ length: this.totalPagination }, (v, k) => k + 1);
          }

        }

      } else {

        // pagination INICIAL
        if (this.atualPage < 5) {
          if (this.totalPagination <= 5) {
            this.pagination = Array.from({ length: this.totalPagination }, (v, k) => k + 1);
          } else {
            this.pagination = [1, 2, 3, 4, 5];
          }

        } else {
          this.pagination = [
            this.totalPagination - 4,
            this.totalPagination - 3,
            this.totalPagination - 2,
            this.totalPagination - 1,
            this.totalPagination
          ];

        }
      }
    }


  }



  searchFilterCaracters(event) {
    this.outputPagination.emit(event);
  }

}
