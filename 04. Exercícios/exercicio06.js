// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
// A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function calcularJurosSimples(capitalInicial, taxaJurosMensal, tempoAplicacaoMeses) {
    return resultado = capitalInicial + (capitalInicial * (taxaJurosMensal / 100) * tempoAplicacaoMeses);
}

function calcularJurosCompostos(capitalInicial, taxaJurosMensal, tempoAplicacaoMeses) {
    return capitalInicial * (1 + (taxaJurosMensal / 100)) ** tempoAplicacaoMeses;
}

console.log("Juros Simples:", calcularJurosSimples(1000, 1, 36));
console.log("Juros Compostos:", calcularJurosCompostos(1000, 1, 36));