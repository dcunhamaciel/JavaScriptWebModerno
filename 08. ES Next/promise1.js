const primeiroElemento = array => array[0];

const primeiraLetra = string => string[0];

const letraMinuscula = letra => letra.toLowerCase();

let promessa = new Promise(resolve => {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']);
});

promessa
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log);