import { HttpProvider } from './../http/http';
import { ConfigHelper } from './../../app/helpers/config-helper';
import { CategoriaModel } from './../../app/models/categoria-model';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/provider-base';

@Injectable()
export class CategoriaProvider extends ProviderBase<CategoriaModel> {

  url: string = `${ConfigHelper.Url}categoria`;

  constructor(
    public http: HttpProvider
  ) {
    super(`${ConfigHelper.Url}categoria`, http);
  }
}
