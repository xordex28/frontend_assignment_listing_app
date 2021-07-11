import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

interface Info {
  version?: string;
  logo?: string;
  name?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    './side-menu/styles/side-menu.scss',
    './side-menu/styles/side-menu.shell.scss',
    './side-menu/styles/side-menu.responsive.scss'
  ]
})
export class AppComponent {
  textDir = 'ltr';
  info: Info = {
    version: "1.0.0",
    name: "App"
  };
  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    /* To make sure we provide the fastest app loading experience
       for our users, hide the splash screen automatically
       when the app is ready to be used:

        https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
    */
    SplashScreen.hide();
  }
}
