// Faça um algoritmo que calcule o fatorial de um número.

function calcularFatorial(numero) {
    if (numero == 0) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

console.log(calcularFatorial(0));
console.log(calcularFatorial(1));
console.log(calcularFatorial(2));
console.log(calcularFatorial(3));
console.log(calcularFatorial(4));
console.log(calcularFatorial(5));
console.log(calcularFatorial(6));