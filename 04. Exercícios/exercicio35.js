// Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
// inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
// e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
// final das operações imprima os vetores no console.

function adicionar(vetOrigem, verDestino) {
    for (i = 0; i < vetOrigem.length; i++) {
        verDestino.push(vetOrigem[i]);
    }
}

const vetorAdiciona = [1, 2, 3, 4, 5];
const vetorPilha = [6, 7, 8, 9, 10];

adicionar(vetorPilha, vetorAdiciona);

console.log(vetorAdiciona);