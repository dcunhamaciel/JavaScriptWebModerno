/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array */

function receberPrimeiroEUltimoElemento(array) {
    const result = [];
    result.push(array[0]);
    result.push(array[array.length-1]);
    return result;
}

function receberPrimeiroEUltimoElemento2(array) {
    return [array.shift(), array.pop()];
}
    
console.log(receberPrimeiroEUltimoElemento([7,14,"olá"]));
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]));

console.log(receberPrimeiroEUltimoElemento2([7,14,"olá"]));
console.log(receberPrimeiroEUltimoElemento2([-100, "aplicativo", 16]));