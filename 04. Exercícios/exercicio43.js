// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
// num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é
// da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído
// 30%, relativo a impostos

function calcularSalario(horasTrabalhadas, valorHora) {
    const salarioBruto = horasTrabalhadas * valorHora;
    const salarioLiquido = salarioBruto * 0.7;
    return `Salário igual a R$ ${salarioLiquido.toFixed(2)}`;
}

console.log(calcularSalario(180, 60));