// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function imprimirMenorMaior(numeros) {
    let menor = Number.MAX_SAFE_INTEGER;
    let maior = Number.MIN_SAFE_INTEGER; 

    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    console.log(`Menor: ${menor} - Maior: ${maior}`);
}

imprimirMenorMaior([10, 5, 7, 3, 1, 3, 11, 20, 6, 9]);