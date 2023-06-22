import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { NewFormAction } from '../../model';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
})
export class ProductNewComponent {
  @Output() closeWindow = new EventEmitter<NewFormAction>();

  newForm = new FormGroup({
    url: new FormControl<string>('')
  })

  onSubmit(): void {
    this.closeWindow.emit({submit: true});
  }
}
