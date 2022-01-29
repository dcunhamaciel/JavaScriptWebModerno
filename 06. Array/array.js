console.log(typeof Array);
console.log(typeof new Array);
console.log(typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // undefined

aprovados[3] = "Paulo"
aprovados.push("Abia");
console.log(aprovados.length);

aprovados[9] = "Rafael";
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort();
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1]); // undefined

aprovados = ["Bia", "Carlos", "Ana"];
aprovados.splice(1, 2) // remove 2 elementos a partir do índice 1
console.log(aprovados);