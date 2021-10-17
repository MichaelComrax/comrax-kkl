import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierCheckComponent } from './supplier-check/supplier-check.component';



const routes: Routes = [
    {
        path: '',
        component: SupplierCheckComponent,
        children: [
            // { path: 'details', component: ContractDetailsComponent }
        ],
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SupplierCheckRoutingModule { }