import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SmallContractsLayoutComponent } from './components/layout/small-contracts-layout.component';
import { SmallContractsDashboardComponent } from './components/small-contracts-dashboard/small-contracts-dashboard.component';
import { SmallContractsRoutingModule } from './small-contracts-routing.module';
import { SmallContractsRootComponent } from './components/small-contracts-root/small-contracts-root.component';




@NgModule({
  declarations: [
    SmallContractsRootComponent,
    SmallContractsLayoutComponent,
    SmallContractsDashboardComponent,
  ],
  imports: [
    CommonModule,
    SmallContractsRoutingModule,
    SharedModule,
  ],


})
export class SmallContractsModule { }
