// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function calcularValorAnuidade(valorAnuidade, mesPagamento) {
    if (mesPagamento >= 1 && mesPagamento <= 12) {
        let atraso = mesPagamento - 1;
        return (valorAnuidade * ((1 + (5 / 100)) ** atraso)).toFixed(2);
    } else {
        return 'Mês inválido.';
    }
}

console.log(calcularValorAnuidade(100, 4));