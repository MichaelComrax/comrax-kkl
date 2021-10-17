import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { APPROXIMATE_CONNECTION, CONTRACT_FIRST_INPUT, CONTRACT_SECOND_INPUT_PART_ONE, CONTRACT_SECOND_INPUT_PART_THREE, CONTRACT_SECOND_INPUT_PART_TWO, CONTRACT_THREED_INPUT } from 'src/app/mock_data/create-new-contract';
import { QuestionGroupModel } from 'src/app/shared/components/form/models/question-group.model';
import { FormService, Question, } from 'src/app/shared/components/form/services/form.service';
import { CreateNewContractService } from '../create-new-contract.service';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.scss']
})
export class ContractDetailsComponent implements OnInit {

  constructor(private formService: FormService , private CreateNewContractService:CreateNewContractService) { }
  public slideChecked = false;
  public divisionList: any[] = [];
  public classificationList: any[] = [];
  public displayDrawer: boolean = false;
  // forms vars
  public firstInputs: Question[] = CONTRACT_FIRST_INPUT;
  public secondInputs: Question[] = CONTRACT_SECOND_INPUT_PART_ONE;
  public divisionData: Question[] = CONTRACT_SECOND_INPUT_PART_TWO;
  public classificationData: Question[] = CONTRACT_SECOND_INPUT_PART_THREE;
  public theerdInputs: Question[] = CONTRACT_THREED_INPUT;
  public approximateConnection: Question[] = APPROXIMATE_CONNECTION;
  public formGroup: QuestionGroupModel = {
    questions: this.firstInputs,
    key: 'firstForm',
    label: '',
    formGroup: this.formService.setFormGroup(this.firstInputs)
  }
  public secondFormGroup: QuestionGroupModel = {
    questions: this.secondInputs,
    key: 'secondForm',
    label: '',
    formGroup: this.formService.setFormGroup(this.secondInputs)
  }
  public divisioGroup: QuestionGroupModel = {
    questions: this.divisionData,
    key: 'secondPartTwoForm',
    label: '',
    formGroup: this.formService.setFormGroup(this.divisionData)
  }
  public classificationGroup: QuestionGroupModel = {
    questions: this.classificationData,
    key: 'secondPartThreeForm',
    label: '',
    formGroup: this.formService.setFormGroup(this.classificationData)
  }
  public threedFormGroup: QuestionGroupModel = {
    questions: this.theerdInputs,
    key: 'TheerdForm',
    label: '',
    formGroup: this.formService.setFormGroup(this.theerdInputs)
  }
  public approximateConnectionFormGroup: QuestionGroupModel = {
    questions: this.approximateConnection,
    key: 'approximateConnection',
    label: '',
    formGroup: this.formService.setFormGroup(this.approximateConnection)
  }
  // end forms vars
  public deleteCardItemHandler(event: any, arrName: string): void {
    const index = event[0];
    const childIndex = event[1];
    const arr = arrName === 'division' ? [...this.divisionList] : [...this.classificationList];
    if (event.length == 1) {
      arr.splice(index, 1);
    } else {
      arr[index].list.splice(childIndex, 1);
    }
    arrName === 'division' ? this.divisionList = arr : this.classificationList = arr;
  }
  public divisionHandler(): void {
    const value = this.divisioGroup.formGroup.value;
    const arr = [...this.divisionList];
    this.divisionList = this.addItemToArray(value, arr, 'division');
  }
  public classificationHandler(): void {
    const value = this.classificationGroup.formGroup.value;
    const arr = [...this.classificationList];
    this.classificationList = this.addItemToArray(value, arr, 'classification');
  }
  public addItemToArray(value: any, arr: any[], handler): any[] {
    const object = handler === 'division' ? { key: value.subDivision, list: [value.subUnits] }
      : { key: value.mainClassification, list: [value.secondaryClassification] };
    let check: boolean;
    let itemIndex: number;
    arr.map((item, index) => {
      if (item.key === object.key) {
        check = true;
        itemIndex = index;
      }
    });
    check ? arr[itemIndex].list.push(handler === 'division' ? value.subUnits : value.secondaryClassification) : arr.push(object);
    return arr;
  }

  public displayDrawerHandler(): void {
    this.displayDrawer = !this.displayDrawer;
    this.CreateNewContractService.updateDisplayDrawer(this.displayDrawer)
  }
  //asd
  ngOnInit(): void {
  }



}
