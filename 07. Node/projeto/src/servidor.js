const porta = 3003;

const { response } = require('express');
const express = require('express');
const app = express();

app.get('/produtos', (request, response, next) => {
    response.send({ nome: 'Notebook', preco: 123.45 }); // converter para JSON
});

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
});