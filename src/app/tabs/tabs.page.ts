import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isMobile: boolean = false;
  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      if (this.platform.width() > 768) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    });
  }

}
