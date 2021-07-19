import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public modalController: ModalController) { }

  async show(component: any, props: any = {}, callbackDismiss?: Function, id?:string) {
    const modal = await this.modalController.create({
      component: component,
      animated: true,
      cssClass: 'my-custom-class',
      componentProps: props,
      swipeToClose: true,
      backdropDismiss: false,
      id:id
    });
    modal.onDidDismiss().then((data) => {
      if (callbackDismiss) {
        callbackDismiss(data);
      }
    })
    await modal.present();
  }

}
