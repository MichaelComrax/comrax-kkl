import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SupplierCheckRoutingModule } from './supllier-check-routing.module';
import { SupplierCheckComponent } from './supplier-check/supplier-check.component';


@NgModule({
    declarations: [
        SupplierCheckComponent,
    ],
    imports: [
        SharedModule,
        SupplierCheckRoutingModule
    ],


})
export class SupplierCheckModule { }
