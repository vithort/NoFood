import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/provider-base';
import { ProdutoModel } from '../../app/models/produto-model';
import { ConfigHelper } from './../../app/helpers/config-helper';
import { HttpProvider } from './../http/http';

@Injectable()
export class ProdutoProvider extends ProviderBase<ProdutoModel> {

  url: string = `${ConfigHelper.Url}categoria`;

  constructor(
    public http: HttpProvider
  ) {
    super(`${ConfigHelper.Url}produto`, http);
  }

}