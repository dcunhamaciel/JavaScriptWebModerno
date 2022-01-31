const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedrao', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = alunos.map(a => a.bolsista).reduce((acumulador, atual) => acumulador && atual);
console.log(todosBolsistas);

// Desafio 2: Algum aluno é bolsista?
const temBolsista = alunos.map(a => a.bolsista).reduce((acumulador, atual) => acumulador || atual);
console.log(temBolsista);