import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrappingService {
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
  getProductInfo(url: string): void {
    // TODO url 페이지 스크래핑
    console.log(url);
  }
}
