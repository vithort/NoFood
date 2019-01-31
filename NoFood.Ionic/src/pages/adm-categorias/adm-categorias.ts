import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaModel } from '../../app/models/categoria-model';
import { CategoriaProvider } from './../../providers/categoria/categoria';

@IonicPage()
@Component({
  selector: 'page-adm-categorias',
  templateUrl: 'adm-categorias.html',
})
export class AdmCategoriasPage {

  lista: Array<CategoriaModel> = new Array<CategoriaModel>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categoriaSrv: CategoriaProvider
  ) {
    this._loadData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmCategoriasPage');
  }

  private async _loadData(): Promise<void> {
    let categoriaResult = await this.categoriaSrv.get();
    if (categoriaResult.success) {
      this.lista = <Array<CategoriaModel>>categoriaResult.data;
    }
  }

  addOrEdit(model?: CategoriaModel): void {
    this.navCtrl.push('AdmCategoriaPage', { _categoria: model });
  }

}
