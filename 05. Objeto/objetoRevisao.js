// coleção dinâmica de pares chave/valor
const produto = new Object();
produto.nome = "Cadeira";
produto.marca = "Genérica";
produto.preco = 200.0;

console.log(produto);
delete produto.preco;
console.log(produto);

const carro = {
    modelo: "A4",
    valor: 89000.0,
    proprietario: {
        nome: "Diego",
        idade: 37,
        endereco: {
            logradouro: "Rua ABC",
            numero: 123
        }
    },
    condutores: [{
        nome: "Júnior",
        idade: 19
    }, {
        nome: "Ana",
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

console.log(carro);
carro.proprietario.endereco.numero = 1000;
console.log(carro);