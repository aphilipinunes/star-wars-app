import { MatPaginatorIntl } from '@angular/material/paginator';


export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Itens por página:';
  customPaginatorIntl.nextPageLabel      = 'Próxima página';
  customPaginatorIntl.previousPageLabel  = 'Página anterior';
  customPaginatorIntl.lastPageLabel  = 'Última página';
  customPaginatorIntl.firstPageLabel  = 'Primeira página';

  return customPaginatorIntl;
}
