import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmallContractListComponent } from './small-contarct-list/small-contract-list.component';



const routes: Routes = [
  {
      path: '',
      component: SmallContractListComponent,
      
  },
]
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmallContractListRoutingModule { }