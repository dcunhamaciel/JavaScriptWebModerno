// Crie uma função que receba um array de elementos e retorne um array somente com os números
// presentes no array recebido como parâmetro.

function filtrarNumeros(array) {
    return array.filter(elemento => typeof elemento === "number");
}

console.log(filtrarNumeros(["Javascript", 1, 2.8, "3", "Web", 20]));
console.log(filtrarNumeros(["a", "c"]));