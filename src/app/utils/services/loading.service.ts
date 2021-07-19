import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(public loadingController: LoadingController) { }
  async presentLoading(message: string = 'Por favor espere') {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: message
    });

    loading.onDidDismiss().then(() => {
      console.log('Loading dismissed!');
    });

    await loading.present();

    return loading;
  }

  async close() {
  await  this.loadingController.dismiss();
  }
}
