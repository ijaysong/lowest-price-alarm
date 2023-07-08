import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from '@progress/kendo-angular-buttons';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';

import { FormFieldModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';

import { NgxSpinnerModule } from 'ngx-spinner';

import { ProductListLayoutComponent } from './components/layout/product-list-layout/product-list-layout.component';
import { ProductNewLayoutComponent } from './components/layout/product-new-layout/product-new-layout.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductNewComponent } from './components/product-new/product-new.component';
import { CoreModule } from '../_core/core.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductNewComponent,
    ProductListLayoutComponent,
    ProductNewLayoutComponent,
    ProductInfoComponent
  ],
  imports: [
    GridModule,
    WindowModule,
    ReactiveFormsModule,
    CoreModule,
    ButtonModule,
    LabelModule,
    FormFieldModule,
    NgxSpinnerModule
  ]
})
export class ProductModule {}
