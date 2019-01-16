import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tab-categoria',
  templateUrl: 'tab-categoria.html',
})
export class TabCategoriaPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    //private app: App
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabCategoriaPage');
  }

}
