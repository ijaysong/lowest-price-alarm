import { Component } from '@angular/core';

import { DialogCloseResult, DialogRef } from '@progress/kendo-angular-dialog';
import { NgxSpinnerService } from 'ngx-spinner';

import { ProductService } from '../../../services/product.service';
import { UiNotificationService } from '../../../../_core/services/ui-notification.service';

@Component({
  selector: 'app-product-list-layout',
  templateUrl: './product-list-layout.component.html',
})
export class ProductListLayoutComponent {

  openedAddDialog = false;

  /**
   * ===========================================================================
   * constructor
   * ===========================================================================
   */
  constructor(private spinner: NgxSpinnerService, private service: ProductService, private notificationService: UiNotificationService) {
  }

  /**
   * ===========================================================================
   * Method
   * ===========================================================================
   */
  onClickAddItem() {
    this.openedAddDialog = true;
  }

  onClickDeleteItem() {
    const dialog: DialogRef = this.service.openDeleteDialog();
    dialog.result.subscribe((result) => {
      if (result instanceof DialogCloseResult) {
        // Close
      } else {
        if (result.text === 'confirm') {
          this.spinner.show();
          this.notificationService.notifySuccessDeleted();
          // this.api
          //   .deleteFileUseHistory(id)
          //   .pipe(finalize(() => this.onFinalize()))
          //   .subscribe(() => {
          //     this.refreshGrid();
          //     this.sesameNotification.notifySuccessDeleted();
          //   });
        }
      }
    });
  }

  onClosedAddDialog() {
    this.openedAddDialog = false;
  }
}
