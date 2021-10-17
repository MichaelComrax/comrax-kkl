import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Classes } from 'src/app/shared/directives/classes.directive';
import { StepModel, StepType } from '../../step/step.model';

@Component({
  selector: 'app-card-step',
  templateUrl: './card-step.component.html',
  styleUrls: ['./card-step.component.scss']
})
export class CardStepComponent implements OnInit {

  @Input() public step: StepModel;

  public type: StepType;
  public active$: Observable<boolean>;


  public stepTextClasses: Classes = {
    color: 'text',
    fontWeight: 500,
    fontSize: 1.1
  }
  public activeStepTextClasses: Classes = {
    ...this.stepTextClasses,
    fontWeight: 600,
  }


  @Output() onStepChange: EventEmitter<StepModel> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.type = this.step.type;
    this.active$ = this.step.getActiveObs();
  }

  public onStepClick(): void {
    if (!this.step.isActive) {
      this.onStepChange.emit(this.step);
    }
  }

}
