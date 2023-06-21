import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
})
export class ProductAddComponent {
  @Input() opened: boolean = false;
  @Output() shut: EventEmitter<any> = new EventEmitter();

  newForm = new FormGroup({
    url: new FormControl<string>('')
  })

  onCloseWindow() {
    this.opened = false;
    this.shut.emit();
  }
}
