function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!');
        } else {
            resolve(valor);
        }
    });
}

funcionarOuNao('Testando...', 0.9)
    .then(valor => `Valor: ${valor}`)
    .then(
        valor => console.log(valor),
        erro => console.log(`Erro Específico do "then": ${erro}`)
    )
    .then(() => console.log('Quase Fim'))
    .catch(erro => console.log(`Erro Geral": ${erro}`))
    .then(() => console.log('Fim'));