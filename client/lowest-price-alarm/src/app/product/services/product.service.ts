import { Injectable } from '@angular/core';

import { DialogRef, DialogService, WindowRef, WindowService } from '@progress/kendo-angular-dialog';

import { DeleteConfirmDialogComponent } from '../../_core/components/dialog/delete-confirm/delete-confirm-dialog.component';
import { ProductNewLayoutComponent } from '../components/layout/product-new-layout/product-new-layout.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /**
   * ===========================================================================
   * constructor
   * ===========================================================================
   */
  constructor(private windowService: WindowService,
              private dialogService: DialogService) {}

  /**
   * ===========================================================================
   * Method
   * ===========================================================================
   */
  openNewWindow(): WindowRef {
      return this.windowService.open({
        autoFocusedElement: 'form',
        content: ProductNewLayoutComponent,
        title: ``,
        minWidth: 700,
      });
  }

  openDeleteDialog(): DialogRef {
    return this.dialogService.open({
      content: DeleteConfirmDialogComponent,
      minWidth: 400,
    });
  }
}
