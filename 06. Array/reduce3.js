Array.prototype.ownerReduce = function(callBackFn, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1;
    let acumulador = valorInicial || this[0];
    for (let i = indiceInicial; i < this.length; i++) {    
        acumulador = callBackFn(acumulador, this[i], i, this);
    }
    return acumulador;
}

const nums = [1, 2, 3, 4, 5, 6];
const soma = (total, valor) => total + valor;
console.log(nums.reduce(soma, 21));