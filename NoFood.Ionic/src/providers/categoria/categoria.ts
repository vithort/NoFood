import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/provider-base';
import { CategoriaModel } from './../../app/models/categoria-model';
import { ConfigHelper } from './../../app/helpers/config-helper';
import { HttpProvider } from './../http/http';

@Injectable()
export class CategoriaProvider extends ProviderBase<CategoriaModel> {

  url: string = `${ConfigHelper.Url}categoria`;

  constructor(
    public http: HttpProvider
  ) {
    super(`${ConfigHelper.Url}categoria`, http);
  }

}
