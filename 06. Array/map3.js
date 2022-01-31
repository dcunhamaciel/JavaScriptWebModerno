Array.prototype.ownerMap = function(callBackFn) {
    const result = [];
    for (i = 0; i < this.length; i++) {
        result.push(callBackFn(this[i], i, this));
    }
    return result;
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

let precos = carrinho.ownerMap(paraObjeto).ownerMap(apenasPreco);
console.log(precos);