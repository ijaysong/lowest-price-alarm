import { Component, ComponentRef, OnInit } from '@angular/core';

import {
  DialogCloseResult,
  DialogRef,
  WindowRef
} from '@progress/kendo-angular-dialog';
import { NgxSpinnerService } from 'ngx-spinner';

import { finalize } from 'rxjs';

import { OverlayService } from '../../../_core/services/overlay.service';
import { UiNotificationService } from '../../../_core/services/ui-notification.service';
import { ResponseProduct } from '../../model';
import { ProductApiService } from '../../services/product-api.service';
import { ProductService } from '../../services/product.service';
import { ProductNewLayoutComponent } from '../layout/product-new-layout/product-new-layout.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  selectedIds: number[] = [];
  gridData: ResponseProduct[] = [];

  spinnerName = 'product-delete';

  /**
   * ===========================================================================
   * constructor
   * ===========================================================================
   */
  constructor(
    private spinner: NgxSpinnerService,
    private service: ProductService,
    private apiService: ProductApiService,
    private notificationService: UiNotificationService,
    private overlayService: OverlayService
  ) {}

  /**
   * ===========================================================================
   * Lifecycle Hooks https://angular.io/guide/lifecycle-hooks
   * ===========================================================================
   */
  ngOnInit(): void {
    this.refreshGrid();
  }

  /**
   * ===========================================================================
   * Method
   * ===========================================================================
   */
  refreshGrid(): void {
    this.apiService.retrieveProducts().subscribe((x) => {
      this.gridData = x.list;
    });
  }

  onClickNewItem(): void {
    this.overlayService.show();
    const windowRef: WindowRef = this.service.openNewWindow();
    const content =
      windowRef.content as ComponentRef<ProductNewLayoutComponent>;
    content.instance.closeWindow.subscribe((x) => {
      if (x.submit) {
        this.refreshGrid();
        this.notificationService.notifySuccessRegistered();
      }
      windowRef.close();
    });
    windowRef.result.subscribe(() => {
      this.overlayService.hide();
    });
  }

  onClickDeleteItem(): void {
    const dialog: DialogRef = this.service.openDeleteDialog();
    dialog.result.subscribe((result) => {
      if (result instanceof DialogCloseResult) {
        // Close
      } else {
        if (result.text === 'confirm') {
          this.spinner.show(this.spinnerName);
          this.apiService
            .deleteProducts(this.selectedIds)
            .pipe(finalize(() => this.onFinalize()))
            .subscribe(() => {
              this.refreshGrid();
              this.notificationService.notifySuccessDeleted();
            });
        }
      }
    });
  }

  onFinalize(): void {
    this.spinner.hide(this.spinnerName);
  }
}
