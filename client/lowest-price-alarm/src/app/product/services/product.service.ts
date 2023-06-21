import { Injectable } from '@angular/core';

import { DialogRef, DialogService, WindowService } from '@progress/kendo-angular-dialog';

import { DeleteConfirmDialogComponent } from '../../_core/components/delete-confirm-dialog/delete-confirm-dialog.component';

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
  openDeleteDialog():  DialogRef {
    return this.dialogService.open({
      content: DeleteConfirmDialogComponent
    });
  }
}
