require('./global');

console.log(MinhaApp.saudacao());

MinhaApp.nome = 'Eita!'; // objeto foi congelado com o freeze
console.log(MinhaApp.nome);