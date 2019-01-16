import { AlertProvider } from './../../providers/alert/alert';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioModel } from '../../app/models/usuario-model';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  usuario: UsuarioModel = new UsuarioModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usuarioSrv: UsuarioProvider,
    private alertSrv: AlertProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  async cadastrar(): Promise<void> {
    let cadastroResult = await this.usuarioSrv.register(this.usuario);
    if (cadastroResult.success) {
      this.alertSrv.toast("Cadastro realizado com sucesso!", 'bottom');
      this.navCtrl.setRoot('LoginPage');
    }
  }

  cancelar() {
    this.navCtrl.setRoot('LoginPage');
  }

}
