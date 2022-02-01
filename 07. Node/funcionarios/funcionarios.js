const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chineses = f => f.pais == 'China';
const mulheres = f => f.genero == 'M';
const menorSalario = (funcAnterior, funcAtual) => {
    return funcAtual.salario < funcAnterior.salario ? funcAtual : funcAnterior;
}

axios.get(url).then(response => {
    const funcionarios = response.data;
    const chinesaMenorSalario = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario);
    console.log(chinesaMenorSalario);
});