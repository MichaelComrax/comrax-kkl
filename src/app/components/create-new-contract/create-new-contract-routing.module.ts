import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { ContractLayoutComponent } from './contract-layout/contract-layout.component';
import { ContractWinningComponent } from './contract-winning/contract-winning.component';

const routes: Routes = [
    {
        path: '',
        component: ContractLayoutComponent,
        children: [
            { path: 'details', component: ContractDetailsComponent },
            { path: 'winning', component: ContractWinningComponent },

        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateNewContractRoutingModule { }