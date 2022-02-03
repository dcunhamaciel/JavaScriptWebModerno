const porta = 3003;

const { response } = require('express');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (request, response, next) => {
    response.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id', (request, response, next) => {
    response.send(bancoDeDados.getProduto(request.params.id));
});

app.post('/produtos', (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: request.body.nome,
        preco: request.body.preco
    });
    response.send(produto); // JSON
});

app.put('/produtos/?:id', (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: request.body.id,
        nome: request.body.nome,
        preco: request.body.preco
    });
    response.send(produto); // JSON
});

app.delete('/produtos/?:id', (request, response, next) => {
    const produto = bancoDeDados.excluirProduto(request.body.id);
    response.send(produto); // JSON
});

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
});