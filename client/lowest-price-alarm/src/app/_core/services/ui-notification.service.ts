import { Injectable } from '@angular/core';

import { NotificationService } from '@progress/kendo-angular-notification';

@Injectable({
  providedIn: 'root'
})
export class UiNotificationService {

  /**
   * ===========================================================================
   * constructor
   * ===========================================================================
   */
  constructor(private notificationService: NotificationService) {}

  /**
   * ===========================================================================
   * Method
   * ===========================================================================
   */
  notifySuccessRegistered(): void {
    this.notificationService.show({
      content: '정상적으로 등록되었습니다.',
      hideAfter: 1000,
      position: { horizontal: 'center', vertical: 'top' },
      animation: { type: 'fade', duration: 400 },
      type: { style: 'success', icon: true }
    });
  }

  notifySuccessDeleted(): void {
    this.notificationService.show({
      content: '정상적으로 삭제되었습니다.',
      hideAfter: 1000,
      position: { horizontal: 'center', vertical: 'top' },
      animation: { type: 'fade', duration: 400 },
      type: { style: 'success', icon: true }
    });
  }
}
