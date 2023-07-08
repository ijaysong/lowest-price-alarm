import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { NotificationService } from '@progress/kendo-angular-notification';

import { ErrorContentPaneComponent } from './components/content-pane/error/error-content-pane.component';
import { FooterPaneComponent } from './components/footer-pane/footer-pane.component';
import { HeaderPaneComponent } from './components/header-pane/header-pane.component';
import { ErrorLayoutComponent } from './components/layout/error-layout/error-layout.component';
import { OverlayContainerDirective } from './directives/overlay-container.directive';

@NgModule({
  declarations: [
    HeaderPaneComponent,
    FooterPaneComponent,
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
  imports: [CommonModule, DialogsModule, ButtonsModule],
  providers: [NotificationService]
})
export class CoreModule {}
