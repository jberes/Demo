import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';

@Component({
  selector: 'app-reveal',
  imports: [],
  templateUrl: './reveal.component.html',
  styleUrls: ['./reveal.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RevealComponent {
  dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };
  constructor() {
    RevealSdkSettings.serverUrl = 'https://samples.revealbi.io/upmedia-backend/reveal-api/';
  }
}
