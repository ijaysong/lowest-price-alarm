import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponseScrape } from '../model';

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
  scrapeProductInfo(param: { url: string }): Observable<ResponseScrape> {
    console.log(param);
    const testData: ResponseScrape = {
      attachmentUrl: 'https://testest.com/product/1234',
      brandName: 'test_brand_name',
      name: 'test_name'
    };
    return new Observable<ResponseScrape>((subscriber) =>
      subscriber.next(testData)
    );
  }
}
