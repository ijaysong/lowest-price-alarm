import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorLayoutComponent } from './_core/components/layout/error-layout/error-layout.component';
import { ProductListLayoutComponent } from './product/components/layout/product-list-layout/product-list-layout.component';

const RouteList: Routes = [
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
  imports: [RouterModule.forRoot(RouteList)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
