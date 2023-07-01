import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { finalize } from 'rxjs';

import { ProductInfoAction, ResponseScrape } from '../../model';
import { ProductApiService } from '../../services/product-api.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html'
})
export class ProductInfoComponent implements OnInit {
  @Input() url = '';
  @Output() prev = new EventEmitter<ProductInfoAction>();
  @Output() closeWindow = new EventEmitter<ProductInfoAction>();

  newForm = new FormGroup({
    attachmentUrl: new FormControl<string>(''),
    brandName: new FormControl<string>(''),
    name: new FormControl<string>('')
  });

  spinnerName = 'product-info';

  /**
   * ===========================================================================
   * constructor
   * ===========================================================================
   */
  constructor(
    private spinner: NgxSpinnerService,
    private apiService: ProductApiService
  ) {}

  /**
   * ===========================================================================
   * Lifecycle Hooks https://angular.io/guide/lifecycle-hooks
   * ===========================================================================
   */
  ngOnInit(): void {
    this.scrapeProductInfo(this.url);
  }

  /**
   * ===========================================================================
   * Method
   * ===========================================================================
   */
  scrapeProductInfo(url: string): void {
    this.spinner.show(this.spinnerName);
    this.apiService
      .scrapeProductInfo({ url })
      .pipe(finalize(() => this.onFinalize()))
      .subscribe((x: ResponseScrape) => {
        this.newForm.setValue({
          attachmentUrl: x.attachmentUrl,
          brandName: x.brandName,
          name: x.name
        });
      });
  }

  onSubmit(): void {
    // TODO reqData 모집
    // TODO save api 호출
    this.closeWindow.emit({ submit: true });
  }

  onClickMovePrev(): void {
    this.prev.emit({ prev: true });
  }

  onFinalize(): void {
    this.spinner.hide(this.spinnerName);
  }
}
