'use strict'

require('../models/produto-model');
const repository = require('../repositories/produto-repository');

function produtoController() {

}

produtoController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
}

produtoController.prototype.put = async (req, res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
}

produtoController.prototype.get = async (req, res) => {
    let resultado = await new repository().getAll();
    res.status(200).send(resultado);
}

produtoController.prototype.getById = async (req, res) => {
    let resultado = await new repository().getById(req.params.id);
    res.status(200).send(resultado);
}

produtoController.prototype.delete = async (req, res) => {
    let resultado = await new repository().delete(req.params.id);
    res.status(204).send(resultado);
}

module.exports = produtoController;
