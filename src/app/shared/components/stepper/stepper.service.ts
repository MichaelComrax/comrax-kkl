import { ListItemKeys } from '../list-item/list-item.model';
import { Injectable } from '@angular/core';
import { StepModel } from '../step/step.model';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  constructor() {}

  private activeStep(items: StepModel[], key: ListItemKeys, value: any) {
    items.find((item) => {
      if (item[key] === value) {
        item.active();
      }
    });
  }

  private unactiveStep(items: StepModel[]) {
    items.find((item) => {
      if (item.isActive) {
        item.unactive();
      }
    });
  }
  
  public setStepsStatus(
    items: StepModel[],
    key: ListItemKeys,
    value: string
  ): StepModel[] {
    this.unactiveStep(items);
    this.activeStep(items, key, value);
    return [...items];
  }

  public setSteps(
    steps: StepModel[],
    key: ListItemKeys,
    path: string,
  ): StepModel[] {
    return this.setStepsStatus(steps, key, path);
  }


}
