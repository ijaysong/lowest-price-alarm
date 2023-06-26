import { Component, ComponentRef, OnInit } from '@angular/core';

import { DialogCloseResult, DialogRef, WindowRef } from '@progress/kendo-angular-dialog';
import { NgxSpinnerService } from 'ngx-spinner';

import { UiNotificationService } from '../../../_core/services/ui-notification.service';
import { ProductService } from '../../services/product.service';
import {
  ProductNewLayoutComponent
} from '../layout/product-new-layout/product-new-layout.component';
import { OverlayService } from '../../../_core/services/overlay.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  /**
   * ===========================================================================
   * constructor
   * ===========================================================================
   */
  constructor(private spinner: NgxSpinnerService, private service: ProductService, private notificationService: UiNotificationService, private overlayService: OverlayService) {
  }

  /**
   * ===========================================================================
   * Lifecycle Hooks https://angular.io/guide/lifecycle-hooks
   * ===========================================================================
   */
  ngOnInit() {
  }

  /**
   * ===========================================================================
   * Method
   * ===========================================================================
   */
  onClickNewItem() {
    this.overlayService.show();
    const windowRef: WindowRef = this.service.openNew();
    const content = windowRef.content as ComponentRef<ProductNewLayoutComponent>;
    content.instance.closeWindow.subscribe((x) => {
      if (x.submit) {
    //     // this.refreshGrid();
        this.notificationService.notifySuccessRegistered();
      }
      windowRef.close();
    });
    windowRef.result.subscribe(() => {
      this.overlayService.hide();
    });
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
}
