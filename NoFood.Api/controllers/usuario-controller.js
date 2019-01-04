'use strict'

const repository = require('../repositories/usuario-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');
const md5 = require('md5');
const _repo = new repository();

function usuarioController() {

}

usuarioController.prototype.post = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req._body.nome, 'Informe seu nome!');
    _validationContract.isRequired(req._body.email, 'Informe seu e-mail!');
    _validationContract.isMail(req._body.email, 'O e-mail informado é inválido!');
    _validationContract.isRequired(req._body.senha, 'A senha informada é obrigatória!');
    _validationContract.isRequired(req._body.senhaConfirmacao, 'A senha de confirmação é obrigatória!');
    _validationContract.isTrue(req._body.senha != req._body.senhaConfirmacao, 'A senha e a Confirmação não são iguais!');

    let usuarioIsEmailExiste = await _repo.isEmailExiste(req._body.email);
    if (usuarioIsEmailExiste) {
        _validationContract.isTrue((usuarioIsEmailExiste.nome != undefined), `Já existe o e-mail ${req._body.email} cadastrado em nossa base!`);
    }

    // Faz a criptografia da senha do usuário
    req._body.senha = md5(req._body.senha);

    ctrlBase.post(_repo, _validationContract, req, res);
}

usuarioController.prototype.put = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req._body.nome, 'Informe seu nome!');
    _validationContract.isRequired(req._body.email, 'Informe seu e-mail!');
    _validationContract.isMail(req._body.email, 'O e-mail informado é inválido!');
    _validationContract.isRequired(req.params.id, 'Informe o Id do usuário que será editado!');

    let usuarioIsEmailExiste = await _repo.isEmailExiste(req._body.email);
    if (usuarioIsEmailExiste) {
        _validationContract.isTrue((usuarioIsEmailExiste.nome != undefined)
            && (usuarioIsEmailExiste._id != req.params.id),
            `Já existe o e-mail ${req._body.email} cadastrado em nossa base!`
        );
    }
    ctrlBase.put(_repo, _validationContract, req, res);
}

usuarioController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
}

usuarioController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
}

usuarioController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
}

module.exports = usuarioController;
