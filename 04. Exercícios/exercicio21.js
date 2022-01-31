// Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
// 1) crianças com menos de 10 anos pagam R$80; 
// 2) conveniados com idade entre 10 e 30 anos pagam R$150; 
// 3) conveniados com idade acima de 30 e até 60 anos pagam R$195; 
// 4) conveniados acima de 60 anos pagam R$230

function calcularValorPlanoSaude(idade) {
    let result = 100;    
    if (idade < 10) {
        result += 80;
    } else if (idade <= 30) {
        result += 50;
    } else if (idade <= 60) {
        result += 95;
    } else {
        result += 130;
    }
    return result;
}

console.log(calcularValorPlanoSaude(8));
console.log(calcularValorPlanoSaude(15));
console.log(calcularValorPlanoSaude(35));
console.log(calcularValorPlanoSaude(52));
console.log(calcularValorPlanoSaude(80));