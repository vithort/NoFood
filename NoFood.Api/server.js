//pega um pacote que já foi importado:
const express = require('express');
const app = express();

// definir uma rota:
app.get('/', (req, res) => {
    // resposta de status 200 é quando obteve sucesso
    res.status(200).send('Olá Mundo!');
});

// faz o servidor escutar na porta 3000:
app.listen(3000, () => {
    console.log('Servidor Api NoFood iniciado na porta 3000.');
});