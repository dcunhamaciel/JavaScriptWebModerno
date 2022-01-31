// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function calcularAltura(alturaCrianca1, taxaCrianca1, alturaCrianca2, taxaCrianca2) {
    if (alturaCrianca1 != alturaCrianca2) {
        let criancaMenor = alturaCrianca1 > alturaCrianca2 ? alturaCrianca2 : alturaCrianca1;
        let criancaMaior = alturaCrianca1 > alturaCrianca2 ? alturaCrianca1 : alturaCrianca2;
        let taxaMenor = alturaCrianca1 > alturaCrianca2 ? taxaCrianca2 : taxaCrianca1;
        let taxaMaior = alturaCrianca1 > alturaCrianca2 ? taxaCrianca1 : taxaCrianca2;

        if (taxaMenor <= taxaMaior) {
            return 'A criança menor não ultrapassará a maior.'
        } else {       
            let anos = 0;

            while (criancaMenor < criancaMaior) {
                criancaMenor += taxaMenor;
                anos++;
            }
            return `A criança menor ultrapassará a maior em ${anos} anos` 
        }
    } else {
        return 'Crianças com a mesma altura.';
    }
}

console.log(calcularAltura(150, 2, 130, 4));
console.log(calcularAltura(125, 2, 125, 4));
console.log(calcularAltura(140, 2, 120, 2));