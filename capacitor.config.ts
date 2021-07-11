import { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  "appId": "com.ionicthemes.AppClientTask",
  "appName": "AppClientTask",
  "bundledWebRuntime": false,
  "npmClient": "npm",
  "webDir": "www",
  "linuxAndroidStudioPath": "/home/luis/Descargas/android-studio-ide-202.7351085-linux/android-studio/bin/studio.sh",
  "plugins": {
    "SplashScreen": {
      "launchAutoHide": false
    },
    "CapacitorFirebaseAuth": {
      "providers": ["google.com", "twitter.com", "facebook.com"],
      "languageCode": "en",
      "nativeAuth": false
    }
  }
}


export default config;
