import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ProductListLayoutComponent
} from './product/components/layout/product-list-layout/product-list-layout.component';
import { ErrorLayoutComponent } from './_core/components/layout/error-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListLayoutComponent
  },
  {
    path: 'errorPage/:statusCode',
    component: ErrorLayoutComponent
  },
  { path: '**', redirectTo: 'errorPage/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
