//pega um pacote que já foi importado:
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// CRUD

// Verbs Http

let pessoas = [];

// (C)REATE
// (R)EAD
// (U)PDATE
// (D)ELETE

// definir uma rota:
// (R)EAD
app.get('/', (req, res) => {
    // req = request
    // res = response: resposta de status 200 é quando obteve sucesso
    res.status(200).send(pessoas);
});

// (C)REATE
app.post('/', (req, res) => {
    console.log("Body: ", req.body);
    pessoas.push(req.body);
    res.status(201).send(req.body);
});

// (U)PDATE
app.put('/:id', (req, res) => {
    let pessoaEncontrada = pessoas.filter(pes => {
        return pes.id == req.params.id;
    })
    pessoaEncontrada = req.body;
    res.status(202).send(pessoaEncontrada);
});

// (D)ELETE
app.delete('/:id', (req, res) => {
    for (let index = 0; index < pessoas.length; index++) {
        const pessoa = pessoas[index];
        if (pessoa.id == req.params.id) {
            pessoas.splice(index, 1);
        }
    }
    res.status(204).send();
});

// 400 - Bad Request
// 401 - Unauthorized
// 500 - Internal Server Error



// faz o servidor escutar na porta 3000:
app.listen(3000, () => {
    console.log('Servidor Api NoFood iniciado na porta 3000.');
});