const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor); // 3 3 - objeto na forma literal vira Singleton

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor); // 3 1 - objeto na função factory terá uma instância para cada