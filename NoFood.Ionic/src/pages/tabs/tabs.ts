import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  selecionarCategoria(event): void {
    let navegacaoAnterior = event.linker._history[event.linker._history.length - 2];
    //console.log("Ultimo: ", navegacaoAnterior);
    //console.log("Evento: ", event);
    //console.log(event.tabTitle);

    if (event.tabTitle == 'Categorias' && navegacaoAnterior != '/categoria') {
      this.app.getRootNav().setRoot('CategoriaPage');
    } else {

    }
  }

}
