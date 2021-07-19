import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertController: AlertController) { }

  async show(title: string, message: string, type: "success" | "error" | "info" | "warning", callback: any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `${title}`,
      message: `${message}`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Okay');
            callback();

          }
        }
      ]
    });

    await alert.present();
  }

}
