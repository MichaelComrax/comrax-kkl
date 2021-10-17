import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallContractListRoutingModule } from './small-contarct-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SmallContractListComponent } from './small-contarct-list/small-contract-list.component';



@NgModule({
  declarations: [
    SmallContractListComponent
  ],
  imports: [
    CommonModule,
    SmallContractListRoutingModule,
    SharedModule,
  ]
})
export class SmallContractListModule { }
