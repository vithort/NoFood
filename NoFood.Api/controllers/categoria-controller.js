'use strict'

const repository = require('../repositories/categoria-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');
const _repo = new repository();

function categoriaController() {

}

categoriaController.prototype.post = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.titulo, 'O Título é obrigatório!');
    _validationContract.isRequired(req.body.foto, 'A Foto é obrigatória!');
    ctrlBase.post(_repo, _validationContract, req, rep);
}

categoriaController.prototype.put = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.titulo, 'O Título é obrigatório!');
    _validationContract.isRequired(req.body.foto, 'A Foto é obrigatória!');
    _validationContract.isRequired(req.body.params.id, 'O Id que será atualizado é obrigatório!');
    ctrlBase.put(_repo, _validationContract, req, rep);
}

categoriaController.prototype.get = async (req, res) => {
    console.log('Peguei a informação na Categoria (Tudo): ', req.usuarioLogado);
    console.log('Peguei a informação na Categoria (Id): ', req.usuarioLogado.user._id);
    ctrlBase.get(_repo, req, res);
}

categoriaController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
}

categoriaController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
}

module.exports = categoriaController;
