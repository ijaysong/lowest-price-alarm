import { Component } from '@angular/core';
import { DialogContentBase, DialogRef } from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html'
})
export class ProductDeleteComponent extends DialogContentBase {
  /**
   * ===========================================================================
   * constructor
   * ===========================================================================
   */
  constructor(public override dialog: DialogRef) {
    super(dialog);
  }

  /**
   * ===========================================================================
   * Method
   * ===========================================================================
   */
  onDelete(): void {
    this.dialog.close({ text: 'confirm' });
  }

  onCancel(): void {
    this.dialog.close({ text: 'cancel' });
  }
}
