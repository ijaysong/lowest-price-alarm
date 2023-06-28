import { Component } from '@angular/core';

import { Environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer-pane',
  templateUrl: './footer-pane.component.html'
})
export class FooterPaneComponent {
  emailAddress = Environment.emailAddress || '';
}
