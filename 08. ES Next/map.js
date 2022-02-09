const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log(tecnologias.react); // undefined
console.log(tecnologias.get('react'));
console.log(tecnologias.get('react').framework);

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
]);

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, '=', valor);
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b'); // não aceita repetição, vai substituir 'a' por 'b'
chavesVariadas.set(456, 'b');
console.log(chavesVariadas);