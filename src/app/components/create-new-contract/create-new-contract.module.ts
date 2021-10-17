import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewContractRoutingModule } from './create-new-contract-routing.module';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { ContractLayoutComponent } from './contract-layout/contract-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsCardComponent } from './contract-details/details-card/details-card/details-card.component';
import { ContractWinningComponent} from './contract-winning/contract-winning.component';


@NgModule({
  declarations: [
    ContractDetailsComponent,
    ContractLayoutComponent,
    DetailsCardComponent,
    ContractWinningComponent
  ],
  imports: [
    CommonModule,
    CreateNewContractRoutingModule,
    SharedModule
  ]
})
export class CreateNewContractModule { }
