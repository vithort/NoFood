import { HttpProvider } from './../http/http';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/provider-base';
import { UsuarioModel } from '../../app/models/usuario-model';
import { ConfigHelper } from './../../app/helpers/config-helper';
import { HttpResultModel } from './../../app/models/http-result-model';

@Injectable()
export class UsuarioProvider extends ProviderBase<UsuarioModel>{

  url: string = `${ConfigHelper.Url}usuario`;

  constructor(
    public http: HttpProvider
  ) {
    super(`${ConfigHelper.Url}usuario`, http);
    //console.log('Hello UsuarioProvider Provider');
  }

  async authenticate(email: string, senha: string): Promise<HttpResultModel> {
    return this.http.post(`${this.url}/autenticar`, { email: email, senha: senha });
  }

  async register(usuario: UsuarioModel): Promise<HttpResultModel> {
    return this.http.post(`${this.url}/register`, usuario);
  }

  static registerLogin(result: any) {
    localStorage.setItem(ConfigHelper.storageKeys.token, result.token);
    localStorage.setItem(ConfigHelper.storageKeys.user, JSON.stringify(result.usuario));
  }

  static get isLogado(): boolean {
    return localStorage.getItem(ConfigHelper.storageKeys.token) != undefined;
  }

}
