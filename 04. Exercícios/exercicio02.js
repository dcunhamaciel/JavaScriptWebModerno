// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados

function tipoTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return "Equilátero"
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

console.log(tipoTriangulo(1, 1, 1));
console.log(tipoTriangulo(1, 1, 3));
console.log(tipoTriangulo(1, 2, 3));