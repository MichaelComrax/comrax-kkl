import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IconModel } from 'src/app/shared/components/icon/icon.model';
import { NavbarService } from 'src/app/shared/components/navbar/navbar.service';
import { StepModel } from 'src/app/shared/components/step/step.model';
import { RouterService } from 'src/app/shared/services/route.service';
import { SmallContractsLayoutService } from './small-contracts-layout.service';

@Component({
  selector: 'app-small-contracts-layout',
  templateUrl: './small-contracts-layout.component.html',
  styleUrls: ['./small-contracts-layout.component.scss'],
})
export class SmallContractsLayoutComponent implements OnInit, OnDestroy {
  private routerSubscription: Subscription;
  private statusSubscription: Subscription;

  @Input() public openIcon: string;
  @Input() public logos: IconModel[];

  @Input() public title$: Observable<string>;
  @Input() public status$: Observable<StepModel[]>;
  @Input() public hideWizardPath: string[];
  @Input() public showStatusPath: string[];

  public wizard$: Observable<boolean>;

  private status: StepModel[];

  constructor(
    private routerService: RouterService,
    private layoutService: SmallContractsLayoutService,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.subscribeToStatus();
    this.getCurrentPath();
    this.subscribeToLastPath();
    this.wizard$ = this.layoutService.getWizardObs();
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.statusSubscription.unsubscribe();
  }

  // SUBSCRIBE SECTION
  private subscribeToStatus() {
    this.statusSubscription = this.status$.subscribe((status: StepModel[]) => {
      if (status.length > 0) {
        this.status = status;
      }
    });
  }

  // VIEW METHODS SECTION

  private findPath(list: any[], value: string): boolean {
    return !!list.find((path: string) => path == value);
  }

  private handleStatusState(path: string) {
    this.navbarService.toggleStatus(
      this.findPath(this.showStatusPath, path),
      this.status
    );
  }

  private handleShowState(path: string) {
    this.layoutService.toggleWizard(this.findPath(this.hideWizardPath, path));
    this.handleStatusState(path);
  }

  // ROUTE METHODS SECTION
  private getCurrentPath() {
    const path = this.routerService.getCurrentPath();
    this.handleShowState(path);
  }

  private subscribeToLastPath() {
    this.routerSubscription = this.routerService
      .getLastPathObs()
      .subscribe((path) => {
        this.handleShowState(path);
      });
  }
}
