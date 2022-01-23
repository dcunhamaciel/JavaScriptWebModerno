// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function expoenteAntigo(base, expoente) {
    return Math.pow(base, expoente);
}

function expoenteNovo(base, expoente) {
    return base ** expoente;
}

console.log("Método antigo (2, 3) =", expoenteAntigo(2, 3));
console.log("Método antigo (2, 3) =", expoenteAntigo(10, 2));

console.log("Método novo (2, 3) =", expoenteNovo(2, 3));
console.log("Método novo (2, 3) =", expoenteNovo(10, 2));