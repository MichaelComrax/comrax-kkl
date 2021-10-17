import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { DATA_TABLE, RADIOS } from 'src/app/mock_data/small-contarct-list';
import { QuestionGroupModel } from 'src/app/shared/components/form/models/question-group.model';
import { QuestionRadio } from 'src/app/shared/components/form/models/question-radio';
import { QuestionTextModel } from 'src/app/shared/components/form/models/question-text.model';
import { FormService } from 'src/app/shared/components/form/services/form.service';
import { ColumnModel, ColumnType } from 'src/app/shared/components/table/models/column.model';
import { TableOptions } from 'src/app/shared/components/table/table.component';
import { SmallContractListModel } from '../../small-contracts/models/small-contract-list.model';

@Component({
  selector: 'app-small-contract-list',
  templateUrl: './small-contract-list.component.html',
  styleUrls: ['./small-contract-list.component.scss']
})
export class SmallContractListComponent implements OnInit {
  //radios
  public radios: QuestionRadio[] = RADIOS;
  public radiosFormGroup: QuestionGroupModel = {
    questions: this.radios,
    key: 'firstForm',
    label: '',
    formGroup: this.formService.setFormGroup(this.radios)
  }
  //search input 
  public searchObject =  [new QuestionTextModel({
    key: 'search',
    label: '',
    icon:'search'
  })];
  public searchFormGroup: QuestionGroupModel = {
    questions:  this.searchObject,
    key: 'firstForm',
    label: '',
    formGroup: this.formService.setFormGroup(this.searchObject)
  }
  //table data
  public columns: ColumnModel[] = [
    new ColumnModel({ label: 'מספר הליך', type: ColumnType.CUSTOM }),
    new ColumnModel({ label: 'יחידה מבקשת', type: ColumnType.TEXT,filterable:true  }),
    new ColumnModel({ label: 'סוג התקשרות', type: ColumnType.TEXT, filterable: true }),
    new ColumnModel({ label: 'שם התקשרות', type: ColumnType.TEXT }),
    new ColumnModel({ label: 'סכום התקשרות', type: ColumnType.NUMBER }),
    new ColumnModel({ label: 'סטטוס', type: ColumnType.CUSTOM, center: true, filterable: true }),
    new ColumnModel({ label: 'משתמש', type: ColumnType.TEXT, filterable: true }),
    new ColumnModel({
      columnDef: 'actions',
      label: '',
      type: ColumnType.ACTIONS,
    }),
  ];
  public data = DATA_TABLE;
  public model: SmallContractListModel = new SmallContractListModel();
  private pagination: PaginationInstance = {
    itemsPerPage: 8,
    currentPage: 1,
    totalItems: 16,
  };
  public options: TableOptions<SmallContractListModel> = {
    pagination: this.pagination,
    filters: ['id'],
  };
  constructor(private formService: FormService) { }

  ngOnInit(): void {

  }

}
