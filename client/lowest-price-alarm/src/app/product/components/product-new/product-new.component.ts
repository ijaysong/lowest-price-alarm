import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ProductNewAction } from '../../model';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
})
export class ProductNewComponent {
  @Output() next = new EventEmitter<ProductNewAction>();

  newForm = new FormGroup({
    url: new FormControl<string>('', [Validators.required])
  })

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
  onClickNext() {
    this.newForm.markAllAsTouched();
    if (this.newForm.invalid) {
      console.log(this.newForm.errors)
      return;
    }

    const url = this.newForm.controls.url.value || '';
    this.next.emit({submit: true, url});
  }

  onClickClear() {
    this.newForm.controls.url.reset();
  }

  validateUrl(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const fg = group as FormGroup;
      const url = fg.get('url')
      // TODO custom validator 추가 : w 컨셉 url인지?
      return null;
    }
  }
}
