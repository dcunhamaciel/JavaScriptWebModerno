// Elabore uma função que recebe um número como parâmetro e retorne uma string
// com o símbolo "+" na quantidade especificada no parâmetro.

function simboloMais(quantidade) {
    return quantidade == 0 ? '' : '+'.concat(simboloMais(--quantidade));
}

function simboloMais2(quantidade) {
    return '+'.repeat(quantidade);
}

console.log(simboloMais(2));
console.log(simboloMais(4));

console.log(simboloMais2(2));
console.log(simboloMais2(4));