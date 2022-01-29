// Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function sacarDinheiro(valor) {
    let notas1 = 0;
    let notas5 = 0;
    let notas10 = 0;
    let notas50 = 0;
    let notas100 = 0;
    let quantidade = 0;
    
    while (valor > 0) {
        if (valor >= 100) {
            quantidade = Math.floor(valor / 100);        
            notas100 += quantidade;
            valor -= quantidade * 100;
        } else if (valor >= 50) {
            quantidade = Math.floor(valor / 50);        
            notas50 += quantidade;
            valor -= quantidade * 50;
        } else if (valor >= 10) {
            quantidade = Math.floor(valor / 10);        
            notas10 += quantidade;
            valor -= quantidade * 10;
        } else if (valor >= 5) {
            quantidade = Math.floor(valor / 5);
            notas5 += quantidade;
            valor -= quantidade * 5;
        } else {
            quantidade = Math.floor(valor / 1);
            notas1 += quantidade;
            valor -= quantidade * 1;
        }    
    }

    saque = '';

    if (notas100 > 0) {
        saque += `${notas100} nota(s) de R$ 100. `
    }
    if (notas50 > 0) {
        saque += `${notas50} nota(s) de R$ 50. `
    }
    if (notas10 > 0) {
        saque += `${notas10} nota(s) de R$ 10. `
    }
    if (notas5 > 0) {
        saque += `${notas5} nota(s) de R$ 5. `
    }
    if (notas1 > 0) {
        saque += `${notas1} nota(s) de R$ 1. `
    }

    return saque;
}

console.log(sacarDinheiro(18));
console.log(sacarDinheiro(25));
console.log(sacarDinheiro(106));