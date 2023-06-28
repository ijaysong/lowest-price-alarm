import { Component } from '@angular/core';

import { DialogContentBase, DialogRef } from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html'
})
export class DeleteConfirmDialogComponent extends DialogContentBase {
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
