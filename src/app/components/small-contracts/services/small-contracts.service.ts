import { IconModel } from '../../../shared/components/icon/icon.model';
import { Injectable } from '@angular/core';
import { StepModel, } from 'src/app/shared/components/step/step.model';
import { Observable } from 'rxjs';
import { NavbarService } from 'src/app/shared/components/navbar/navbar.service';
import { CardDashboardModel } from 'src/app/shared/components/cards/card-dashboard/card-dashboard.model';
import { RouterService } from 'src/app/shared/services/route.service';

@Injectable({
  providedIn: 'root',
})
export class SmallContractsService {
  private steps: StepModel[] = [
    new StepModel({
      label: 'הקמת התקשרות חדשה',
      svgUrl: 'group',
      path: 'create-new-contract/details',
      size: 3,
      variant: 'square',
      type: 'wizard',
    }),
    new StepModel({
      label: 'הליכים קיימים',
      svgUrl: 'connect',
      path: 'existing-procedures',
      size: 3,
      variant: 'square',
      type: 'wizard',
    }),
    new StepModel({
      label: 'בדיקת ספקים',
      svgUrl: 'evaluation',
      path: 'supplier-check',
      size: 3,
      variant: 'square',
      type: 'wizard',
    }),
    new StepModel({
      label: 'דוחות',
      svgUrl: 'transactions',
      path: 'reports',
      size: 3,
      variant: 'square',
      type: 'wizard',
    }),
  ];

  public status: StepModel[] = [
    new StepModel({
      label: 'בטיפול - הזנת פרטים',
      svgUrl: 'reload',
      value: 6,
      type: 'status',
    }),
    new StepModel({
      label: 'בטיפול - עריכת ספקים',
      svgUrl: 'reload',
      value: 2,
      type: 'status',
      
    }),
    new StepModel({
      label: 'ממתין לשליחת הצעת מחיר',
      svgUrl: 'flag',
      value: 3,
      type: 'status',
    }),
    new StepModel({
      label: 'ממתין לקבלת הצעת מחיר',
      svgUrl: 'time',
      value: 4,
      type: 'status',
    }),
    new StepModel({
      label: 'ממתין לבחירת זוכים',
      svgUrl: 'flag',
      value: 6,
      type: 'status',
    }),
    
  ];

  public logos: IconModel[] = [new IconModel('logo', 7, 'svg')];

  public titles: Map<string, string> = new Map([

  ]);

  constructor(
    private routerService: RouterService,
    private navbarService: NavbarService
  ) {
    this.navbarService.setTitle(this.titles.get('small-contracts'));
    this.navbarService.setStatus(this.status);
  }

  public getCurrentPath(): string {
    return this.routerService.getCurrentPath();
  }

  public getRouteObs(): Observable<string> {
    return this.routerService.subscribeToRoute();
  }

  public getLastPathObs(): Observable<string> {
    return this.routerService.getLastPathObs();
  }

  public getLastRoute(url: string): string {
    return this.routerService.setLastPath(url);
  }

  public getCards(): CardDashboardModel[] {
    return this.getSteps().map((item: StepModel) => {
      return new CardDashboardModel({
        ...item,
      });
    });
  }

  public getSteps(): StepModel[] {
    return [...this.steps];
  }

  public getStatusObs(): Observable<StepModel[]> {
    return this.navbarService.getStatus();
  }
  public getTitleObs(): Observable<string> {
    return this.navbarService.getTitle();
  }

  public setTitle(path: string) {
    this.navbarService.emitTitle(this.titles.get(path));
  }
}
