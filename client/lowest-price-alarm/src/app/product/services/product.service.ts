import { Injectable } from '@angular/core';

import {
  DialogRef,
  DialogService,
  WindowRef,
  WindowService
} from '@progress/kendo-angular-dialog';

import { ProductNewLayoutComponent } from '../components/layout/product-new-layout/product-new-layout.component';
import { ProductDeleteComponent } from '../components/product-delete/product-delete/product-delete.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /**
   * ===========================================================================
   * constructor
   * ===========================================================================
   */
  constructor(
    private windowService: WindowService,
    private dialogService: DialogService
  ) {}

  /**
   * ===========================================================================
   * Method
   * ===========================================================================
   */
  openNewWindow(): WindowRef {
    return this.windowService.open({
      autoFocusedElement: 'form',
      content: ProductNewLayoutComponent,
      title: '상품 등록',
      minWidth: 700
    });
  }

  openDeleteDialog(): DialogRef {
    return this.dialogService.open({
      content: ProductDeleteComponent,
      minWidth: 400
    });
  }
}
