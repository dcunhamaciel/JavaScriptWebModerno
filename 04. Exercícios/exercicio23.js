// Escreva um algoritmo que receba o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5.

function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = [];
    notas.push(nota1);
    notas.push(nota2);
    notas.push(nota3);
    notas.sort((a, b) => a < b ? -1 : 1);

    let mediaFinal = (notas[0] * 3 + notas[1] * 3 + notas[2] * 4) / 10;

    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`);
}

calcularNotaFinal(123, 2.8, 6, 3.5);