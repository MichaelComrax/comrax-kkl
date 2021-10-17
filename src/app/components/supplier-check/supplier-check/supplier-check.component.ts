import { Component, OnInit } from '@angular/core';
import { QuestionGroupModel } from 'src/app/shared/components/form/models/question-group.model';
import { QuestionTextModel } from 'src/app/shared/components/form/models/question-text.model';
import { FormService } from 'src/app/shared/components/form/services/form.service';

@Component({
  selector: 'app-supplier-check',
  templateUrl: './supplier-check.component.html',
  styleUrls: ['./supplier-check.component.scss']
})
export class SupplierCheckComponent implements OnInit {

  constructor(private formService: FormService) { }
  //search input 
  public searchObject = [new QuestionTextModel({
    key: 'search',
    label: '',
    icon: 'search'
  })];
  public searchFormGroup: QuestionGroupModel = {
    questions: this.searchObject,
    key: 'searchForm',
    label: '',
    formGroup: this.formService.setFormGroup(this.searchObject)
  }
  ngOnInit(): void {
  }

}
