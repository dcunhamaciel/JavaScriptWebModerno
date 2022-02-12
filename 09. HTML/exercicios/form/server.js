const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/usuarios', (request, response) => {
    console.log(request.body);
    response.send('<h1>Parabéns. Usuário Incluído!!</h1>');
});

app.post('/usuarios/:id', (request, response) => {
    console.log(request.body);
    console.log(request.params.id);
    response.send('<h1>Parabéns. Usuário Alterado!!</h1>');
});

app.listen(3003);