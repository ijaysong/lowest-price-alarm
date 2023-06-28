import { Component, EventEmitter, Output } from '@angular/core';

import {
  ProductNewAction,
  ProductNewLayoutAction,
  ProductInfoAction
} from '../../../model';

@Component({
  selector: 'app-product-new-layout',
  templateUrl: './product-new-layout.component.html'
})
export class ProductNewLayoutComponent {
  @Output() closeWindow = new EventEmitter<ProductNewLayoutAction>();

  displayProductNew = true;
  url = '';

  /**
   * ===========================================================================
   * constructor
   * ===========================================================================
   */
  constructor() {}

  /**
   * ===========================================================================
   * Method
   * ===========================================================================
   */
  onNextPage(result: ProductNewAction): void {
    if (result.submit) {
      this.displayProductNew = false;
      this.url = result.url;
    }
  }

  onPrevPage(result: ProductInfoAction): void {
    if (result.prev) {
      this.displayProductNew = true;
    }
  }

  onCloseWindow(result: ProductInfoAction): void {
    if (result.submit) {
      this.closeWindow.emit({ submit: true });
    }
  }
}
