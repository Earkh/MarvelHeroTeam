import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

export interface IAlert {
  header?: string,
  subheader?: string,
  message?: string
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertCtrl: AlertController
  ) { }


  async presentSimpleAlert(alertText: IAlert) {
    const alert = await this.alertCtrl.create({
      header: alertText.header,
      subHeader: alertText.subheader,
      message: alertText.message,
      buttons: ['OK'],
    });

    await alert.present();
  }


  async presentConfirmationAlert(alertText: IAlert) {
    let choice: any;

    const alert = await this.alertCtrl.create({
      header: alertText.header,
      subHeader: alertText.subheader,
      message: alertText.message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            alert.dismiss(1)
            return false;
          },
        },
      ],
    });

    await alert.present();
    await alert.onDidDismiss().then((data) => {
      choice = data
    })
    return choice
  }


}
