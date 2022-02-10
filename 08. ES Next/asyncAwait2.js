const { rescheduleJob } = require("node-schedule");

function gerarNumeroEntre(min, max, numerosProibidos) {
    if (min > max) {
        [min, max] = [max, min];
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!');
        } else {        
            resolve(aleatorio);
        }
    });
}

async function gerarMegaSena(qtdNumeros) {
    try {
        const numeros = [];
        for (let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(1, 60, numeros));
        }
        return numeros;
    } catch(e) {
        throw 'Não deu certo!';
    }
}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log);