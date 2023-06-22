import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { WindowModule } from '@progress/kendo-angular-dialog';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductNewComponent } from './components/product-new/product-new.component';
import { ProductListLayoutComponent } from './components/layout/product-list-layout/product-list-layout.component';
import { CoreModule } from '../_core/core.module';

@NgModule({
  declarations: [ProductListComponent, ProductNewComponent, ProductListLayoutComponent],
  imports: [
    GridModule,
    WindowModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class ProductModule { }
