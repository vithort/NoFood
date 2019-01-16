import { CategoriaModel } from './../../app/models/categoria-model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-adm-categoria',
  templateUrl: 'adm-categoria.html',
})
export class AdmCategoriaPage {

  categoria: CategoriaModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    let _categ = this.navParams.get('_categoria');
    if (_categ) {
      this.categoria = <CategoriaModel>_categ;
    } else {
      this.categoria = new CategoriaModel();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmCategoriaPage');
  }



}
