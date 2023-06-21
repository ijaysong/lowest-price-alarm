import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderPaneComponent } from './components/header-pane/header-pane.component';
import { FooterPaneComponent } from './components/footer-pane/footer-pane.component';
import { DeleteConfirmDialogComponent } from './components/delete-confirm-dialog/delete-confirm-dialog.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { NotificationService } from '@progress/kendo-angular-notification';
import { ErrorLayoutComponent } from './components/layout/error-layout.component';
import { ErrorPaneComponent } from './components/error-pane/error-pane.component';

@NgModule({
  declarations: [
    HeaderPaneComponent,
    FooterPaneComponent,
    DeleteConfirmDialogComponent,
    ErrorLayoutComponent,
    ErrorPaneComponent
  ],
  exports: [
    CommonModule,
    DialogsModule,
    HeaderPaneComponent,
    FooterPaneComponent
  ],
  imports: [
    CommonModule,
    DialogsModule
  ],
  providers: [
    NotificationService
  ]
})
export class CoreModule { }
