const nome = "Rebeca";
const concatenacao = "Olá "  + nome + "!";
const template1 = `Olá ${nome}!`;
const template2 = `Olá 
    ${nome}!`;

console.log(concatenacao);
console.log(template1);
console.log(template2); //considera quebra de linha

console.log(`1 + 3 = ${1 + 3}`);

const upCase = texto => texto.toUpperCase();

console.log(`Ei... ${upCase("cuidado")}!`);