import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardDashboardModel } from 'src/app/shared/components/cards/card-dashboard/card-dashboard.model';
import { BreakpointService } from 'src/app/shared/services/breakpoint.service';
import { RouterService } from 'src/app/shared/services/route.service';
import { SmallContractsService } from '../../services/small-contracts.service';

@Component({
  selector: 'app-small-contracts-dashboard',
  templateUrl: './small-contracts-dashboard.component.html',
  styleUrls: ['./small-contracts-dashboard.component.scss'],
})
export class SmallContractsDashboardComponent implements OnInit {
  public cards: CardDashboardModel[];
  public $tablet: Observable<boolean>;

  constructor(
    private smallContractsService: SmallContractsService,
    private routerService: RouterService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.cards = this.smallContractsService.getCards();
    this.$tablet = this.breakpointService.isTablet();
  }

  public onCardClick(card) {
    const path: string = `small-contracts/${card.path}`;
    this.routerService.navigate(path);
  }
}
