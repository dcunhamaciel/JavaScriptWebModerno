function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase);
        }, segundos * 1000);
    });
}

falarDepoisDe(3, 'Que legal !')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(error => console.log(error));

console.log('vai executar antes da promessa que será executada em 3 segundos..');