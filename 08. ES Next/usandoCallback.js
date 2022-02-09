// sem promise...
const http = require('http');

const getTurma = (letra, callBack) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    http.get(url, response => {
        let resultado = '';

        response.on('data', data => {
            resultado += data;
        });

        response.on('end', () => {
            callBack(JSON.parse(resultado));
        });
    });
}

let nomes = [];
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`));
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`));
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`));
            console.log(nomes);
        });        
    });
});