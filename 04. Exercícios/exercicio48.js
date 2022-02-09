// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.

function multiplicar(numero1, numero2) {
    resultado = numero1;
    for (let i = 1; i < numero2; i++) {
        resultado += numero1;
    }
    return resultado;
}

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));
console.log(multiplicar(2, 7));