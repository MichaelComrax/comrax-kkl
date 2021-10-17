import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmallContractsDashboardComponent } from './components/small-contracts-dashboard/small-contracts-dashboard.component';
import { SmallContractsRootComponent } from './components/small-contracts-root/small-contracts-root.component';

const routes: Routes = [
  {
    path: '',
    component: SmallContractsRootComponent,
    children: [
      {
        path: '',
        component: SmallContractsDashboardComponent
      },
      {
        path: 'create-new-contract',
        loadChildren: () =>
          import('../create-new-contract/create-new-contract.module').then((m) => m.CreateNewContractModule)
      },
      {
        path: 'existing-procedures',
        loadChildren: () =>
          import('../small-contarct-list/small-contract-list.module').then((m) => m.SmallContractListModule)
      },
      {
        path: 'supplier-check',
        loadChildren: () =>
          import('../supplier-check/supplier-check.module').then((m) => m.SupplierCheckModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmallContractsRoutingModule { }
