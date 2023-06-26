import { Component, EventEmitter, Output } from '@angular/core';
import { NewFormAction } from '../../../model';

@Component({
  selector: 'app-product-add-layout',
  templateUrl: './product-new-layout.component.html',
})
export class ProductNewLayoutComponent {
  @Output() closeWindow = new EventEmitter<NewFormAction>();

  openAdd = true

  /**
   * ===========================================================================
   * constructor
   * ===========================================================================
   */
  constructor() {
  }

  /**
   * ===========================================================================
   * Method
   * ===========================================================================
   */
  onCloseAdd(item: NewFormAction) {
    console.log(item);
    if (item.submit) {
      this.openAdd = false;
    }
  }
}
