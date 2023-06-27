import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { WindowModule } from '@progress/kendo-angular-dialog';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductNewComponent } from './components/product-new/product-new.component';
import { ProductListLayoutComponent } from './components/layout/product-list-layout/product-list-layout.component';
import { CoreModule } from '../_core/core.module';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { ProductNewLayoutComponent } from './components/layout/product-new-layout/product-new-layout.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormFieldModule } from '@progress/kendo-angular-inputs';

@NgModule({
  declarations: [ProductListComponent, ProductNewComponent, ProductListLayoutComponent, ProductNewLayoutComponent, ProductInfoComponent],
  imports: [
    GridModule,
    WindowModule,
    ReactiveFormsModule,
    CoreModule,
    ButtonModule,
    LabelModule,
    FormFieldModule
  ]
})
export class ProductModule { }
