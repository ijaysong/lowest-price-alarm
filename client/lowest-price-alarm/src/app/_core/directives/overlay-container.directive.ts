import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { OverlayService } from '../services/overlay.service';
import * as _ from 'lodash';

@Directive({
  selector: '[appOverlayContainer]'
})
export class OverlayContainerDirective {

  /**
   * ===========================================================================
   * constructor
   * ===========================================================================
   */
  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private service: OverlayService
  ) {
    this.service.subscribe((x) => {
      if (x === true) {
        this.show();
      } else {
        this.hide();
      }
    });
  }

  /**
   * ===========================================================================
   * Method
   * ===========================================================================
   */
  show(): void {
    if (_.isEmpty(this.elementRef)) {
      return;
    }

    if (_.isEmpty(this.elementRef.nativeElement)) {
      return;
    }

    const child = this.renderer.createElement('div') as HTMLElement;
    this.renderer.addClass(child, 'k-overlay');
    this.renderer.appendChild(this.elementRef.nativeElement, child);
  }

  hide(): void {
    if (_.isEmpty(this.elementRef)) {
      return;
    }

    if (_.isEmpty(this.elementRef.nativeElement)) {
      return;
    }
    const overlay = this.elementRef.nativeElement.querySelector('.k-overlay');
    if (_.isNull(overlay)) {
      return;
    }

    this.renderer.removeChild(this.elementRef.nativeElement, overlay);
  }

}
