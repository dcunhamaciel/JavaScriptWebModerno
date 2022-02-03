// let e const
{
    var a = 2;
    let b = 3;
    console.log(b);
}
console.log(a);
//console.log(b); // erro, let tem escopo de bloco

// Template String
const produto = 'iPad';
console.log(`${produto} é caro!`);

// Destructuring
const [l, e, ...tras] = 'Cod3r'; // [] para string
console.log(l, e, tras);

const [x, , y] = [1, 2, 3]; // [] para array
console.log(x, y);

const { nome: primeiroNome, idade } = { nome: 'Diego', sobrenome: 'Maciel', idade: 37 }; // {} para objeto
console.log(primeiroNome, idade);