// armazenando uma função em uma variável
const imprimirSoma = function(a, b) {
    console.log(a + b);
};

imprimirSoma(2, 3);

// armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
};

console.log(soma(2, 3));

// retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const imprimirTexto = a => console.log(a);
imprimirTexto("Legal!!!");