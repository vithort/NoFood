import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { CategoriaProvider } from './../../providers/categoria/categoria';
import { CategoriaModel } from './../../app/models/categoria-model';

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  categorias: Array<CategoriaModel> = new Array<CategoriaModel>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categoriaSrv: CategoriaProvider,
    public actionSheetController: ActionSheetController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
  }

  ionViewWillEnter() {
    this.load();
  }

  async load(): Promise<void> {
    try {
      let categoriaResult = await this.categoriaSrv.get();
      if (categoriaResult.success) {
        this.categorias = <Array<CategoriaModel>>categoriaResult.data;
      }
    } catch (error) {
      console.log('Problema ao carregar as Categorias! Erro: ', error);
    }
  }

  adminOptions(): void {
    let action = this.actionSheetController.create({
      title: 'Administração',
      buttons: [
        {
          text: 'Gerenciar Categorias',
          handler: () => {
            this.gerenciarCategoria();
          }
        },
        {
          text: 'Gerenciar Produtos',
          handler: () => {
            this.gerenciarProduto();
          }
        },
        {
          text: 'Cancelar',
          handler: () => { },
          role: 'destructive'
        }
      ]
    });
    action.present();
  }

  gerenciarCategoria(): void {
    this.navCtrl.push('AdmCategoriasPage');
  }

  gerenciarProduto(): void {
    this.navCtrl.push('AdmProdutosPage');
  }

}
