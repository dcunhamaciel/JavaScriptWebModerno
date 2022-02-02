// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

function multiplicar(vetor, multiplicador) {
    result = [];
    for (i = 0; i < vetor.length; i++) {
        result.push(vetor[i] * multiplicador);
    }
    return result;
}

function multiplicarCondicional(vetor, multiplicador) {
    return multiplicador > 5 ? multiplicar(vetor, multiplicador) : [];
}

console.log(multiplicar([1, 2, 3, 4, 5], 3));
console.log(multiplicarCondicional([1, 2, 3, 4, 5], 3));
console.log(multiplicarCondicional([1, 2, 3, 4, 5], 6));