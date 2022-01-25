// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 
// e retorne true ou false.

function divisivelPorTres(numero) {
    return numero % 3 == 0;
}

function imprimirDivisivelPorTres(numero) {
    console.log(`${numero} é divisível por 3:`,divisivelPorTres(numero));
}

imprimirDivisivelPorTres(3);
imprimirDivisivelPorTres(10);
imprimirDivisivelPorTres(12);