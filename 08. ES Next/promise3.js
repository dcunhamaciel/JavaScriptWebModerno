function gerarNumeroEntre(min, max) {
    if (min > max) {
        [min, max] = [max, min];
    }

    return new Promise(resolve => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;
        resolve(aleatorio);
    });
}

gerarNumeroEntre(1, 60)
    .then(numero => numero * 10)
    .then(numeroX10 => `O número gerado foi ${numeroX10}`)
    .then(console.log);