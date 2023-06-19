import { Constructor } from "src/app/shared/mixims/constructor.mixim";

export interface Pageable {
  dataList?: any[];
  paginatedList: [];
  pagination: {
    actualPage: number,
    first: number,
    rows: number,
    totalRecords: number,
    rowsPerPageOptions: number[],
  }
    setPagination(): void;
    onPageChange(event: any): void;
}

export function pageable<T extends Constructor>(base: T)
  : Constructor<Pageable> & T {

  abstract class PageableClass extends base {
    abstract dataList?: any[];
    paginatedList: any[] = [];

    pagination = {
      actualPage: 0,
      first: 0,
      rows: 10,
      totalRecords: 0,
      rowsPerPageOptions: [10, 20, 30]
    };

    protected setPagination(): void {
      this.pagination.actualPage = 0;
      this.pagination.first = 0;
      this.pagination.totalRecords = this.dataList?.length!;
      const data = this.dataList ?? [];
      this.paginatedList = data.slice(
        this.pagination.first,
        this.pagination.first + this.pagination.rows
      );
    }

    protected onPageChange(event: any): void {
      this.pagination.actualPage = event.page;
      this.pagination.first = event.first;
      this.pagination.rows = event.rows;

      this.paginatedList = this.dataList!.slice(
        this.pagination.first,
        this.pagination.first + this.pagination.rows
      );
    }
  }

  return PageableClass;
}
