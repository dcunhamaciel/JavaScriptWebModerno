const fs = require('fs');

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoEscritaGerado.json', JSON.stringify(produto), erro => {
    console.log(erro || 'Arquivo salvo!');
});