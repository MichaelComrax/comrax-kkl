import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ColumnModel } from '../models/column.model';
import { RowModel } from '../models/row.model';
import { TableModel } from '../models/table.model';

@Component({
  selector: 'app-table-expand',
  templateUrl: './table-expand.component.html',
  styleUrls: ['./table-expand.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableExpandComponent<T> implements OnInit {
  @Input() public $table: Observable<TableModel<T>>;
  @Input() public expand: ElementRef;

  private subscription: Subscription;

  public table: TableModel<T>;
  public $data: Observable<RowModel<T>[]>;
  public $columnDefs: Observable<string[]>;
  public $columns: Observable<ColumnModel[]>;

  public columns: ColumnModel[];
  public columnDefs: string[];

  constructor() {}

  ngOnInit(): void {
    this.subscribeToTable();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscribeToTable() {
    this.subscription = this.$table.subscribe((table: TableModel<T>) => {
      this.table = table;
      this.columns = table.columns;
      this.$data = table.$data;
      this.columnDefs = table.columnDefs;
    });
  }
}
