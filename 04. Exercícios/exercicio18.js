// Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
// switch. Crie um case default que escreva ‘Número fora do intervalo.’

function obterNumeroPorExtenso(numero) {
    switch(numero) {
        case 0:
            return 'Zero';
        case 1:
            return 'Um';
        case 2:
            return 'Dois';
        case 3:
            return 'Três';
        case 4:
            return 'Quatro';
        case 5:
            return 'Cinco';
        case 6:
            return 'Seis';
        case 7:
            return 'Sete';
        case 8:
            return 'Oito';
        case 9:
            return 'Nove';
        case 10:
            return 'Dez';
        default:
            return 'Numero fora do intervalo.';
    }
}

console.log(obterNumeroPorExtenso(0));
console.log(obterNumeroPorExtenso(1));
console.log(obterNumeroPorExtenso(2));
console.log(obterNumeroPorExtenso(3));
console.log(obterNumeroPorExtenso(4));
console.log(obterNumeroPorExtenso(5));
console.log(obterNumeroPorExtenso(6));
console.log(obterNumeroPorExtenso(7));
console.log(obterNumeroPorExtenso(8));
console.log(obterNumeroPorExtenso(9));
console.log(obterNumeroPorExtenso(10));
console.log(obterNumeroPorExtenso(11));
