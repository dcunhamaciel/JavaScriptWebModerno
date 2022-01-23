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