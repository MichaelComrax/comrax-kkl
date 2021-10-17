import { NgModule } from '@angular/core';
import { CoreModule } from './../core/core.module';

import { FormInputComponent } from './components/form/form-input/form-input.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepComponent } from './components/step/step.component';
import { IconComponent } from './components/icon/icon.component';
import { TypographyComponent } from './components/typography/typography.component';
import { MenuComponent } from './components/menu/menu.component';

import { StatusComponent } from './components/status/status.component';
import { RootComponent } from './components/root/root.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarBottomComponent } from './components/navbar-bottom/navbar-bottom.component';

import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ListComponent } from './components/list/list.component';
import { TitleComponent } from './components/title/title.component';

import { DataTableComponent } from './components/data-grid/data-table/data-table.component';
import { DataCellComponent } from './components/data-grid/data-cell/data-cell.component';
import { DataRowComponent } from './components/data-grid/data-row/data-row.component';

import { SpinnerComponent } from './components/spinner/spinner.component';

import { VariantDirective } from './directives/variant.directive';
import { SizeDirective } from './directives/size.directive';
import { ButtonDirective } from './directives/button.directive';
import { UnderlineDirective } from './directives/underline.directive';

import { AreaPipe } from './pipes/area.pipe';

import { DateCellComponent } from './components/date/date-cell.component';
import { ExpandPanelComponent } from './components/expand-panel/expand-panel.component';
import { FormComponent } from './components/form/form/form.component';
import { ColumnFilterComponent } from './components/columns/column-filter/column-filter.component';
import { FormGroupComponent } from './components/form/form-group/form-group.component';
import { FormRadioComponent } from './components/form/form-radio/form-radio.component';
import { LastUpdateComponent } from './components/last-update/last-update.component';
import { ColumnFormComponent } from './components/columns/column-form/column-form.component';
import { ClassesDirective } from './directives/classes.directive';
import { TableExpandComponent } from './components/table/table-expand/table-expand.component';

import { CardStatusComponent } from './components/cards/card-status/card-status.component';
import { CardWizardComponent } from './components/cards/card-wizard/card-wizard.component';
import { CardStepComponent } from './components/cards/card-step/card-step.component';
import { CardDashboardComponent } from './components/cards/card-dashboard/card-dashboard.component';
import { ColumnExpandComponent } from './components/columns/column-expand/column-expand.component';
import { FormAutocompleteComponent } from './components/form/form-autocomplete/form-autocomplete.component';
import { CardUserComponent } from './components/cards/card-user/card-user.component';
import { ColorDirective } from './directives/color.directive';
import { DrawerComponent } from './components/drawer/drawer.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { FormatPipe } from './pipes/format.pipe';

@NgModule({
  providers:[FormatPipe,AreaPipe],
  declarations: [
    RootComponent,
    FormComponent,
    FormGroupComponent,
    FormInputComponent,
    FormRadioComponent,
    FormAutocompleteComponent,
    StepperComponent,
    StepComponent,
    IconComponent,
    TypographyComponent,
    NavbarComponent,
    NavbarBottomComponent,
    MenuComponent,
    TableComponent,
    TableExpandComponent,
    PaginationComponent,
    ColumnFilterComponent,
    ColumnFormComponent,
    ColumnExpandComponent,
    ListComponent,
    TitleComponent,
    DataTableComponent,
    DataCellComponent,
    DataRowComponent,
    StatusComponent,
    SpinnerComponent,
    DateCellComponent,
    ExpandPanelComponent,
    SizeDirective,
    ButtonDirective,
    VariantDirective,
    UnderlineDirective,
    ClassesDirective,
    ColorDirective,
    AreaPipe,
    SvgIconComponent,
    LastUpdateComponent,
    CardStatusComponent,
    CardWizardComponent,
    CardStepComponent,
    CardDashboardComponent,
    CardUserComponent,
    DrawerComponent,
    FormatPipe,
  ],
  imports: [
    CoreModule,
  ],
  exports: [
    CoreModule,
    DrawerComponent,
    SvgIconComponent,
    RootComponent,
    FormComponent,
    FormInputComponent,
    StepperComponent,
    StepComponent,
    NavbarComponent,
    NavbarBottomComponent,
    MenuComponent,
    CardStatusComponent,
    CardWizardComponent,
    CardStepComponent,
    CardDashboardComponent,
    CardUserComponent,
    TableComponent,
    TableExpandComponent,
    PaginationComponent,
    TitleComponent,
    TypographyComponent,
    StatusComponent,
    IconComponent,
    ExpandPanelComponent,
    SpinnerComponent,
    LastUpdateComponent,
    DataTableComponent,
    DataCellComponent,
    DataRowComponent,
    DateCellComponent,
    ListComponent,
    SizeDirective,
    VariantDirective,
    ButtonDirective,
    ClassesDirective,
    UnderlineDirective,
    ColorDirective,
    AreaPipe,
    FormRadioComponent,
    FormatPipe,
  ],
})
export class SharedModule { }
