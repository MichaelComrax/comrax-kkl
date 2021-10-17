import { PaginationInstance } from 'ngx-pagination';
import { Observable } from 'rxjs';
import { ColumnModel } from 'src/app/shared/components/table/models/column.model';
import { TableDataSource } from 'src/app/shared/components/table/table-datasource';
import { RowModel } from './row.model';

export class TableModel<T> {
  public $data: Observable<RowModel<T>[]>;
  public columns: ColumnModel[];

  public columnDefs: string[];
  public pagination: PaginationInstance;

  private type: T;
  private dataSource: TableDataSource<T>;
  private data: T[];
  public rows: RowModel<T>[];

  // array of columnDefs to remove columnDefs array
  // by default remove id columnDef
  private filters: string[];

  constructor(options: {
    data: T[];
    type: T;
    columns: ColumnModel[];
    pagination?: PaginationInstance;
    filters?: string[];
  }) {
    this.data = options.data;
    this.type = options.type;
    this.columns = options.columns || [];
    this.filters = options.filters?.concat(['id']) || ['id'];
    this.pagination = options?.pagination
    this.dataSource = new TableDataSource<T>(this.data);
  }

}
