import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async show(title: string, message: string, type: "success" | "error" | "info" | "warning" | "notification") {
    if (type === 'success') {
      const toast = await this.toastController.create({
        header: `${title}`,
        message: `${message}`,
        position: 'top',
        duration: 5000,
        color: "success"
        /*       buttons: [
                {
                  side: 'start',
                  icon: 'star',
                  text: 'Favorite',
                  handler: () => {
                    console.log('Favorite clicked');
                  }
                }, {
                  text: 'Done',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  }
                }
              ] */
      });
      toast.present();

    }

    if (type === 'error') {
      const toast = await this.toastController.create({
        header: `${title}`,
        message: `${message}`,
        position: 'top',
        duration: 3500,
        color: "danger"
        /*       buttons: [
                {
                  side: 'start',
                  icon: 'star',
                  text: 'Favorite',
                  handler: () => {
                    console.log('Favorite clicked');
                  }
                }, {
                  text: 'Done',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  }
                }
              ] */
      });
      toast.present();

    }
  }

  async showNotification(dataNotification?: any) {
    const toast = await this.toastController.create({
      header: `${dataNotification.notification.title}`,
      message: `${dataNotification.notification.body}`,
      duration: 3000,
      cssClass: 'toast-custom-class',
    });
    toast.present();
  }
}
