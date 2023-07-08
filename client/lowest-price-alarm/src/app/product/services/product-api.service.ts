import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProductInfoReqData, ResponseScrape } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
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
  registerProduct(reqData: ProductInfoReqData): Observable<unknown> {
    console.log(reqData);
    return of({});
  }

  scrapeProductInfo(param: { url: string }): Observable<ResponseScrape> {
    console.log(param);
    const mockData: ResponseScrape = {
      attachmentUrl:
        'https://product-image.wconcept.co.kr/productimg/image/img9/35/301814835_OB54365.jpg',
      brandName: 'Slowslowly',
      name: 'No.65 / Daisy Raffia Mini Tote Bag (데이지 꽃 자수 라피아 미니 토트백 크로쉐백 라탄 니트가방)'
    };
    return of(mockData);
  }
}
