const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); //undefined

valores[5] = 10;
console.log(valores[5]);
console.log(valores); //valores[4] = <1 empty item>

console.log(valores.length);

valores.push({id: 3}, false, null, "Teste");
console.log(valores);

valores.pop(); //remove último elemento
console.log(valores);

delete valores[0]; //valores[0] = <1 empty item>
console.log(valores);

console.log(typeof valores); //object