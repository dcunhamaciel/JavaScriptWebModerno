const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); //vazio
console.log(escola.charCodeAt(3)); //unicode (51)
console.log(escola.indexOf("d"));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!");
console.log(escola.replace(3, "e"));

console.log("Ana,Maria,Pedro".split(","));