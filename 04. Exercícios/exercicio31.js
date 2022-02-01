// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos
// há nesse vetor e imprime a quantidade no console.

function imprimirQuantidadeNegativos(vetor) {
    let qtdNegativos = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            qtdNegativos++;
        }
    }
    console.log(`Quantidade de números negativos: ${qtdNegativos}`);
}

imprimirQuantidadeNegativos([10, 5, -7, 3, -1, 3, -11, -20, 6, 9]);