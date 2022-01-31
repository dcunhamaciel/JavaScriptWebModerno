Array.prototype.ownerForEach = function(callBackFn) {
    for (let i = 0; i < this.length; i++) {
        callBackFn(this[i], i, this);
    }
}

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.ownerForEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
});

aprovados.ownerForEach(nome => console.log(nome));