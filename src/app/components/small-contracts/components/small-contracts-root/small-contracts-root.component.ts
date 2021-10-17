import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuService } from '../../../../shared/components/menu/menu.service';
import {
  StepperDirection,
  StepModel,
} from 'src/app/shared/components/step/step.model';
import { MenuListModel } from 'src/app/shared/components/menu/menu.model';
import { StepperService } from 'src/app/shared/components/stepper/stepper.service';
import { Observable, Subscription } from 'rxjs';
import { IconModel } from 'src/app/shared/components/icon/icon.model';
import { SmallContractsService } from '../../services/small-contracts.service';
import { RouterService } from 'src/app/shared/services/route.service';

@Component({
  selector: 'app-small-contracts-root',
  templateUrl: './small-contracts-root.component.html',
  styleUrls: ['./small-contracts-root.component.scss'],
})
export class SmallContractsRootComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  // NAVBAR DATA SECTION
  public openIcon: string = 'treegradientlands';
  public logos: IconModel[];
  public title$: Observable<string>;
  public status$: Observable<StepModel[]>;

  // WIZARD SECTION
  public steps: StepModel[];
  public direction: StepperDirection = 'column';
  public hideWizardPath: string[] = ['small-contracts'];
  public showStatusPath: string[] = ['small-contracts'];

  // MENU SECTION
  public menu: MenuListModel[];

  constructor(
    private smallContractsService: SmallContractsService,
    private menuService: MenuService,
    private stepperService: StepperService,
    private routerService: RouterService
  ) { }

  ngOnInit(): void {
    this.subscribeToModulePrefix();
    this.setProps();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // SET PROPS METHOD
  private setProps() {
    this.menu = this.menuService.getMenu();
    this.steps = this.smallContractsService.getSteps();

    this.logos = this.smallContractsService.logos;
    this.title$ = this.smallContractsService.getTitleObs();
    this.status$ = this.smallContractsService.getStatusObs();
  }

  private subscribeToModulePrefix() {
    this.subscription = this.routerService
      .getModulePrefixObs()
      .subscribe((modulePrefix: string) => {
        this.steps = this.stepperService.setSteps(
          this.steps,
          'path',
          modulePrefix
        );
        this.smallContractsService.setTitle(modulePrefix)
      });
  }

  public onChangeStep(step: StepModel) {
    const path: string = `engagements/${step.path}`;
    this.routerService.navigate(path);
  }
}
