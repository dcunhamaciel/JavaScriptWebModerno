const fs = require('fs');
const path = require('path');

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try
        {
            fs.readFile(caminho, (erro, conteudo) => {
                resolve(conteudo.toString());
            });
        } catch(e) {
            reject(e);
        }
        
    });
}

lerArquivo(path.join(__dirname, 'dados.txt'))
    .then(console.log)
    .catch(e => console.log(e.message));