console.log(soma(3, 4)); // pode ser utilizado antes da declaração
//console.log(subtrai()); // apenas depois da declaração

// function declaration
function soma(x, y) {
    return x + y;
}

// function expression
const subtrai = function(x, y) {
    return x - y;
}

// named function expression
const multiplica = function multiplica(x, y) {
    return x * y;
}

console.log(soma(3, 4));
console.log(subtrai(3, 4));
console.log(multiplica(3, 4));