// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(2, 3));

// Arrow Function (this)
const lexico1 = () => console.log(this === exports); // this em arrow function sempre aponta para exports
const lexico2 = lexico1.bind({});
lexico1(); // true
lexico2(); // true

// Parâmetro default
function log(texto = 'Node') {
    console.log(texto);
}

log();
log(undefined); // assume valor padrão
log(null); // assume null
log('Node é Legal!');

// Operador rest
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    console.log(total);
}
total(1, 2, 3, 4, 5);