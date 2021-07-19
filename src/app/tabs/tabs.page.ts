import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isMobile: boolean = false;
  constructor(private platform: Platform, public router: Router) {
    this.platform.ready().then(() => {
      if (this.platform.width() > 768) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    });
  }

  onPreview() {
    window.history.back();
  }

}
