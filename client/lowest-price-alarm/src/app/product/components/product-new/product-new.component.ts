import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

import { ProductNewAction } from '../../model';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html'
})
export class ProductNewComponent {
  @Output() next = new EventEmitter<ProductNewAction>();

  newForm = new FormGroup({
    url: new FormControl<string>('', [Validators.required, this.validateUrl])
  });

  /**
   * ===========================================================================
   * constructor
   * ===========================================================================
   */
  constructor(private validateService: ValidateService) {}

  get url(): FormControl {
    return this.newForm.get('url') as FormControl;
  }

  /**
   * ===========================================================================
   * Method
   * ===========================================================================
   */
  onClickNext(): void {
    this.newForm.markAllAsTouched();
    if (this.newForm.invalid) {
      console.log(this.newForm.errors);
      return;
    }

    const url = this.newForm.controls.url.value || '';
    this.next.emit({ submit: true, url });
  }

  onClickClear(): void {
    this.newForm.controls.url.reset();
  }

  onBlur(): void {
    const fc = this.newForm.get('url');
    const url = fc?.value as string;
    const result = this.validateService.isWconceptURL(url);
    const error = result ? null : { invalidUrl: true };

    fc?.setErrors(error);
  }

  /**
   * ===========================================================================
   * Custom Validator
   * ===========================================================================
   */
  validateUrl(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const fg = group as FormGroup;
      const url = fg.get('url')?.value as string;
      const result = this.validateService.isWconceptURL(url);

      return result ? null : { invalidUrl: true };
    };
  }
}
