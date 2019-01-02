//pega um pacote que já foi importado:
const express = require('express');
const app = express();

// CRUD

// Verbs Http

// (C)REATE
// (R)EAD
// (U)PDATE
// (D)ELETE

// definir uma rota:
// (R)EAD
app.get('/', (req, res) => {
    // req = request
    // res = response: resposta de status 200 é quando obteve sucesso
    res.status(200).send('Olá Mundo!');
});

// (C)REATE
app.post('/', (req, res) => {
    res.status(201).send('Criado!');
});

// (U)PDATE
app.put('/', (req, res) => {
    res.status(202).send('Atualizado!');
});

// (D)ELETE
app.delete('', (req, res) => {
    res.status(204).send('Registro Excluído!');
});

// 400 - Bad Request
// 401 - Unauthorized
// 500 - Internal Server Error



// faz o servidor escutar na porta 3000:
app.listen(3000, () => {
    console.log('Servidor Api NoFood iniciado na porta 3000.');
});