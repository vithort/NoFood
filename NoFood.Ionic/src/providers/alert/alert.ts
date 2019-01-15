import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';
import { Title } from '@angular/platform-browser';

@Injectable()
export class AlertProvider {

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    console.log('Hello AlertProvider Provider');
  }

  toast(title: string, position: string): void {
    let toast = this.toastCtrl.create({ message: title, position: position, duration: 3000 });
    toast.present();
  }

  alert(title: string, message: string): void {
    this.alertCtrl.create({
      title: title,
      message: message,
      buttons: ['Ok'],
      enableBackdropDismiss: false
    }).present();
  }

  confirm(title: string, message: string, callback: any): void {
    this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [{
        text: 'Não',
        role: 'Cancel',
        handler: () => {
          console.log('Confirm:Say:No');
        }
      },
      {
        text: 'Sim',
        handler: () => {
          callback();
        }
      }
      ]
    }).present();
  }

}