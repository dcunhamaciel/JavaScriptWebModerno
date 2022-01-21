const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// sem callback
let notasBaixasSemCall = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixasSemCall.push(notas[i]);
    }
}

console.log(notasBaixasSemCall);

// com callback
notasBaixasComCall = notas.filter((nota) => nota < 7);
console.log(notasBaixasComCall);