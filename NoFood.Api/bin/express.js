const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

// Routers
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');
const usuarioRouter = require('../routes/usuario-router');

// Criando / Invocando a Api / Server Web do Express
const app = express();

// Configuração de parse do JSON
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));

// Configurando a conexão com o Banco de Dados
// Parâmetros de Configuração: mongodb://<dbuser>:<dbpassword>@ds149034.mlab.com:49034/nofood
mongoose.connect(variables.Database.connection, { useNewUrlParser: true });

// Configurando as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);
app.use('/api/usuario', usuarioRouter);

// Exportando nossa Api
module.exports = app;

// Funcionamento: Api --> MIDDLEWARE --> Rotas --> Controller --> Repository --> Banco