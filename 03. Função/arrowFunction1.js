let dobro = function(a) {
    return a * 2;
}

// função arrow sempre é anônima
dobro = (a) => {
    return a * 2;
}

// apenas 1 parâmetro pode tirar os parênteses, apenas 1 linha pode tirar as chaves e o return
dobro = a => a * 2;

console.log(dobro(Math.PI));

let ola = function() {
    return "Olá";
}

ola = () => "Olá"; // forma padrão
ola = _ => "Olá"; // possui um parâmetro

console.log(ola());