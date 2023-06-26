import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService extends Subject<boolean> {

  /**
   * ===========================================================================
   * constructor
   * ===========================================================================
   */
  constructor() {
    super();
  }

  /**
   * ===========================================================================
   * Method
   * ===========================================================================
   */
  show(): void {
    this.next(true);
  }

  hide(): void {
    this.next(false);
  }
}
