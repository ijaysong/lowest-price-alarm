import { Injectable } from '@angular/core';

import { Environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
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
  isWconceptURL(url: string): boolean {
    const domainRegex = new RegExp(
      `^(https?):\\/\\/(m|www).(${Environment.wconceptDomain}\\/product\\/)([0-9]{9})`,
      'i'
    );
    return domainRegex.test(url);
  }
}
