// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
// Deverá diferenciar números de strings.

function maiorOuIgual(numero1, numero2) {
    if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
        return false;
    }
    return numero1 >= numero2;
}

console.log(maiorOuIgual(0, 0));
console.log(maiorOuIgual(0, "a"));
console.log(maiorOuIgual(5, 1));