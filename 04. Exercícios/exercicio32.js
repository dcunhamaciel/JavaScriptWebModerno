// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function calcularMedia(numeros) {
    let soma = 0;
    for(let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma / numeros.length;
}

console.log(calcularMedia([1, 2, 3, 4, 5]));