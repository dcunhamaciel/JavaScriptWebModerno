// Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo)

function basquete(stringPontuacoes) {
    const pontuacoes = stringPontuacoes.split(" ");    
    let qtdRecorde = 0;
    let piorJogo = 0;
    let menor = parseInt(pontuacoes[0]);
    let maior = parseInt(pontuacoes[0]);
    let pontuacao = 0;

    for (i = 1; i < pontuacoes.length; i++) {
        pontuacao = parseInt(pontuacoes[i]);
        if (pontuacao > maior) {
            maior = pontuacao;
            qtdRecorde++;
        }
        if (pontuacao < menor) {
            menor = pontuacao;
            piorJogo = i + 1;
        }
    }

    return [qtdRecorde, piorJogo];
}

console.log(basquete("10 20 20 8 25 3 0 30 1"));
console.log(basquete("0 8 25 3 30 10 20 20 1"));