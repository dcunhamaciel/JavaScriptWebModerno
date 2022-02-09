// Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusive) e retorne se o
// parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusive for true, tenha "entre"
// como inlusive, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusive não
// seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero
// é igual a minimo ou a maximo.

function estaEntre(numero, minimo, maximo, inclusive = false) {
    return inclusive ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo;
}

console.log(estaEntre(10, 5, 100));
console.log(estaEntre(16, 100, 160));
console.log(estaEntre(3, 3, 150));
console.log(estaEntre(3, 3, 150, true));