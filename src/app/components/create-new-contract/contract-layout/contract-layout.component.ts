import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { STEPS } from 'src/app/mock_data/create-new-contract';
import { RouterService } from 'src/app/shared/services/route.service';
import { StepperService } from 'src/app/shared/components/stepper/stepper.service';
import { CreateNewContractService } from '../create-new-contract.service';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';

@Component({
  selector: 'app-contract-layout',
  templateUrl: './contract-layout.component.html',
  styleUrls: ['./contract-layout.component.scss']
})
export class ContractLayoutComponent implements OnInit {
  public steps = STEPS;
  public displayDrawer: boolean;
  public showActions: boolean;
  private unsubscribeToRoute: Subscription;
  private routePrefix: string = 'small-contracts/create-new-contract';
  constructor(
    private stepperService: StepperService,
    private routerService: RouterService,
    private createNewContractService: CreateNewContractService
  ) { }

  public obs$ : Observable<boolean>

  ngOnInit(): void {
    this.subscribeToRoute();
    let path = this.routerService.getCurrentPath();
    if (path === 'create-new-contract') {
      this.routerService.navigate('small-contracts/create-new-contract/details')
    }
    this.steps = this.stepperService.setSteps(this.steps, 'path', path);
    this.obs$ = this.createNewContractService.getDisplayDrawer()
  }
  ngOnDestroy(): void {
    this.unsubscribeToRoute.unsubscribe();
  }
  private subscribeToRoute(): void {
    this.unsubscribeToRoute = this.routerService
      .getLastPathObs()
      .subscribe((path: string) => {
        this.steps = this.stepperService.setSteps(this.steps, 'path', path);
        this.onShowActions(path);
      });
  }
  private onShowActions(path: string) {
    this.showActions = path === 'details';
  }
  public onChangeStep(step) {
    const path: string = `${this.routePrefix}/${step.path}`;
    this.routerService.navigate(path);
  }
}
