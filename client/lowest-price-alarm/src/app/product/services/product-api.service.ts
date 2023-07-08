import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProductInfoReqData, ResponseProducts, ResponseScrape } from '../model';

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
  retrieveProducts(): Observable<ResponseProducts> {
    const mockData1 = {
      id: 1,
      url: 'https://m.wconcept.co.kr/product/302803899',
      brandName: 'J.Chung',
      name: 'Choisy Shirring Blouse_White',
      originalPrice: 139000,
      currentPrice: 125100,
      discountPercent: 10,
      attachment: {
        id: 1,
        url: 'https://product-image.wconcept.co.kr/productimg/image/img9/99/302803899_WX45515.jpg'
      },
      priceHistories: []
    };
    const mockData2 = {
      id: 2,
      url: 'https://www.wconcept.co.kr/Product/301814835',
      brandName: 'Slowslowly',
      name: 'No.65 / Daisy Raffia Mini Tote Bag (데이지 꽃 자수 라피아 미니 토트백 크로쉐백 라탄 니트가방)',
      originalPrice: 125000,
      currentPrice: 103750,
      discountPercent: 17,
      attachment: {
        id: 1,
        url: 'https://product-image.wconcept.co.kr/productimg/image/img9/35/301814835_OB54365.jpg'
      },
      priceHistories: []
    };
    return of({ list: [mockData1, mockData2] });
  }

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

  deleteProducts(ids: number[]): Observable<unknown> {
    console.log(ids);
    return of({});
  }
}
