// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20).

function imprimirIntervalo(vetor) {
    let qtdNumerosNoIntervalo = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            qtdNumerosNoIntervalo++;
        }
    }
    console.log(`${qtdNumerosNoIntervalo} números dentro do intervalo.`);
}

imprimirIntervalo([7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]);