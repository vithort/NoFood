import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class SpinnerProvider {

  private spinner: Loading = null;

  constructor(
    public loading: LoadingController
  ) {
    console.log('Hello SpinnerProvider Provider');
  }

  show(message: string): void {
    if (this.spinner == null) {
      this.spinner = this.loading.create({ content: (message || 'Carregando...') });
      this.spinner.present();
    } else {
      this.spinner.data.content = message;
    }
  }

  hide(): void {
    if (this.spinner != null) {
      this.spinner.dismiss();
      this.spinner = null;
    }
  }

}
