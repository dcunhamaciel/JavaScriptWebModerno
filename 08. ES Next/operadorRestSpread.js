// operador ... rest (juntar) / spread (espalhar)

// usar rest com parâmetro de função
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    console.log(total);
}
total(1, 2, 3, 4, 5);

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

// usar spread com array
const grupoA = ['João', 'Pedro', 'Glória'];
const grupoB = ['Maria', 'Rafaela', ...grupoA];
console.log(grupoB);