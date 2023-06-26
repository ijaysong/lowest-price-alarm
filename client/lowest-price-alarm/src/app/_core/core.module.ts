import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogsModule } from '@progress/kendo-angular-dialog';
import { NotificationService } from '@progress/kendo-angular-notification';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { DeleteConfirmDialogComponent } from './components/dialog/delete-confirm/delete-confirm-dialog.component';
import { ErrorContentPaneComponent } from './components/content-pane/error/error-content-pane.component';
import { ErrorLayoutComponent } from './components/layout/error-layout/error-layout.component';
import { HeaderPaneComponent } from './components/header-pane/header-pane.component';
import { FooterPaneComponent } from './components/footer-pane/footer-pane.component';
import { OverlayContainerDirective } from './directives/overlay-container.directive';
import { OverlayService } from './services/overlay.service';

@NgModule({
  declarations: [
    HeaderPaneComponent,
    FooterPaneComponent,
    DeleteConfirmDialogComponent,
    ErrorLayoutComponent,
    ErrorContentPaneComponent,
    OverlayContainerDirective
  ],
  exports: [
    CommonModule,
    DialogsModule,
    HeaderPaneComponent,
    FooterPaneComponent,
    OverlayContainerDirective
  ],
  imports: [
    CommonModule,
    DialogsModule,
    ButtonsModule
  ],
  providers: [
    NotificationService
  ]
})
export class CoreModule { }
