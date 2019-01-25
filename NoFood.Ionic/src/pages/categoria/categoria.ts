import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
  }

  gerenciarCategoria(): void {
    this.navCtrl.push('AdmCategoriasPage');
  }

  gerenciarProduto(): void {
    this.navCtrl.push('AdmProdutosPage');
  }

}
