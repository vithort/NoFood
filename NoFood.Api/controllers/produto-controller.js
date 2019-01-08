'use strict'

const repository = require('../repositories/produto-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');
const _repo = new repository();

function produtoController() {

}

produtoController.prototype.post = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.nome, 'O Nome é obrigatório!');
    _validationContract.isRequired(req.body.preco, 'O Preço é obrigatória!');
    _validationContract.isRequired(req.body.descricao, 'A Descrição é obrigatória!');
    _validationContract.isRequired(req.body.foto, 'A Foto é obrigatória!');
    _validationContract.isTrue(req.body.preco == 0, 'A Foto é obrigatória!');
    if (req.body.preco) {
        _validationContract.isTrue(req.body.preco == 0, 'O Preço do produto deve ser maior que 0!');
    }
    ctrlBase.post(_repo, _validationContract, req, rep);
}

produtoController.prototype.put = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.nome, 'O Nome é obrigatório!');
    _validationContract.isRequired(req.body.preco, 'O Preço é obrigatória!');
    _validationContract.isRequired(req.body.descricao, 'A Descrição é obrigatória!');
    _validationContract.isRequired(req.body.foto, 'A Foto é obrigatória!');
    _validationContract.isTrue(req.body.preco == 0, 'A Foto é obrigatória!');
    if (req.body.preco) {
        _validationContract.isTrue(req.body.preco == 0, 'O Preço do produto deve ser maior que 0!');
    }
    _validationContract.isRequired(req.body.params.id, 'O Id que será atualizado é obrigatório!');
    ctrlBase.put(_repo, _validationContract, req, rep);
}

produtoController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
}

produtoController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
}

produtoController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
}

module.exports = produtoController;
