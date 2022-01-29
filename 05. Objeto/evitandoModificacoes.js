// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: "Qualquer",
    preco: 1.99,
    tag: "promoção"
});

console.log("Extensível", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca"; // não é extensível, não vai fazer nada
delete produto.tag;
console.log(produto);

// Object.seal
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado", Object.isSealed(pessoa));

pessoa.sobrenome = "Silva"; // selado, não vai fazer nada
pessoa.idade = 29;
delete pessoa.idade; // selado, não vai fazer nada
console.log(pessoa);

// Object.freeze = selado + valores constantes
Object.freeze(pessoa);
console.log("Congelado", Object.isFrozen(pessoa));

pessoa.idade = 31; // congealdo, não vai fazer nada
console.log(pessoa);