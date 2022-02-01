console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
    console.log('Dentro de uma função...');

    console.log(this === module.exports); // false    
    console.log(this === exports); // false
    console.log(this === global); // true ... this dentro de uma função aponta para global

    this.perigo = '...'; // está colocando no escopo global
}

logThis();