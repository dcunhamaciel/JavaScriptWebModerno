const [a] = [5, 10, 15];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[0, 8, ,8], [9, 6, 8]];
console.log(nota);