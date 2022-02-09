// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
// o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetir(valorRepetidor, numRepeticoes) {
    const resultado = [];
    for (let i = 0; i < numRepeticoes; i++) {
        resultado.push(valorRepetidor);
    }
    return resultado;
}

function repetir2(valorRepetidor, numRepeticoes) {
    return Array(numRepeticoes).fill(valorRepetidor);
}

console.log(repetir('código', 2));
console.log(repetir(7, 3));

console.log(repetir2('código', 2));
console.log(repetir2(7, 3));