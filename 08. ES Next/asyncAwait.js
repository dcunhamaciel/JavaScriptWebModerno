// com promise...
const http = require('http');

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, response => {
            let resultado = '';
    
            response.on('data', data => {
                resultado += data;
            });
    
            response.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                } catch(e) {
                    reject(e);
                }
            });
        });
    });
}

// Recurso do ES8
// Objetivo de simplificar o uso de promises...
let obterAlunos = async () => {
    const turmaA = await getTurma('A');
    const turmaB = await getTurma('B');
    const turmaC = await getTurma('C');
    return [].concat(turmaA, turmaB, turmaC);
} // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes));