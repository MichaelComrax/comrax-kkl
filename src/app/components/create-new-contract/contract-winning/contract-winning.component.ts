import { Component, OnInit } from '@angular/core';
import { DrawerComponent } from '../../../shared/components/drawer/drawer.component';
import { ColumnModel, ColumnType } from '../../../shared/components/table/models/column.model';
import { DATA_TABLE_WINNING } from 'src/app/mock_data/small-contarct-list';
import { WinningContractListModel } from '../../small-contracts/models/contract-winning.model';
import { TableOptions } from 'src/app/shared/components/table/table.component';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-contract-winning',
  templateUrl: './contract-winning.component.html',
  styleUrls: ['./contract-winning.component.scss']
})
export class ContractWinningComponent implements OnInit {

  public data = DATA_TABLE_WINNING;
  public model: WinningContractListModel = new WinningContractListModel();
  public pagination : PaginationInstance={
    itemsPerPage: 8,
    currentPage: 1,
    totalItems: 16,
  }
  public options : TableOptions<ContractWinningComponent>={
    pagination: this.pagination,
  }

  //----------------------------

  public columns: ColumnModel[] = [
    new ColumnModel({ label: 'ספק', type: ColumnType.CUSTOM }),
    new ColumnModel({ label: 'איש קשר', type: ColumnType.TEXT, filterable: true }),
    new ColumnModel({ label: 'חוות דעת', type: ColumnType.TEXT, filterable: true }),
    new ColumnModel({ label: 'סנקציות', type: ColumnType.TEXT }),
    new ColumnModel({ label: 'מסמכי ספק', type: ColumnType.NUMBER }),
    new ColumnModel({ label: 'מחיר', type: ColumnType.CUSTOM, center: true, filterable: true }),
    new ColumnModel({ label: 'הערה', type: ColumnType.TEXT, filterable: true }),
    new ColumnModel({ label: '% מחיר', type: ColumnType.TEXT, filterable: true }),
    new ColumnModel({ label: '% איכות', type: ColumnType.TEXT, filterable: true }),
    new ColumnModel({
      columnDef: 'actions',
      label: '',
      type: ColumnType.ACTIONS,
    }),
  ];



  constructor() { }

  ngOnInit(): void {
  }



}
