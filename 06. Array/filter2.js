Array.prototype.ownerFilter = function(callBackFn) {
    result = [];
    for (let i = 0; i < this.length; i++) {
        if (callBackFn(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const caros = p => p.preco >= 500;
const frageis = p => p.fragil;

console.log(produtos.ownerFilter(caros).ownerFilter(frageis));