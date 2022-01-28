const pessoa = { nome: "João" };
pessoa.nome = "Pedro";
console.log(pessoa);

//pessoa = { nome: "Ana" }; Erro ao executar, pessoa é constante

Object.freeze(pessoa);

pessoa.nome = "Maria"; // Objeto foi congelado, não irá alterar o nome
console.log(pessoa);