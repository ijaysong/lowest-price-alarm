import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ScrappingService } from '../../../_core/services/scrapping.service';
import { finalize, Observable } from 'rxjs';
import { ProductInfoAction } from '../../model/product-info';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
})
export class ProductInfoComponent implements OnInit {
  @Input() url = '';
  @Output() prev = new EventEmitter<ProductInfoAction>();
  @Output() closeWindow = new EventEmitter<ProductInfoAction>();

  spinnerName = 'product-info';

  /**
   * ===========================================================================
   * constructor
   * ===========================================================================
   */
  constructor(private spinner: NgxSpinnerService, private scrapper: ScrappingService) {}

  /**
   * ===========================================================================
   * Lifecycle Hooks https://angular.io/guide/lifecycle-hooks
   * ===========================================================================
   */
  ngOnInit(): void {
    this.spinner.show(this.spinnerName);

    new Observable(() => {
      this.scrapper.getProductInfo(this.url);
    }).pipe(finalize(() => this.onFinalize()))
  }

  /**
   * ===========================================================================
   * Method
   * ===========================================================================
   */
  onSubmit(): void {
    // TODO reqData 모집
    // TODO save api 호출
    this.closeWindow.emit({submit: true});
  }

  onClickMovePrev(): void {
    this.prev.emit({prev: true});
  }

  onFinalize(): void {
    this.spinner.hide(this.spinnerName)
  }
}
