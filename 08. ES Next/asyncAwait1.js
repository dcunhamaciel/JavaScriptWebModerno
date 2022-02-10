function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Vishhh');
        }, tempo);        
    })
}

/*esperarPor()
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))    
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'));*/

console.log('início');

function retornarValor() {
    return new Promise(resolve => {
        new setTimeout(() => {
            resolve(10);
        }, 3000);
    })
}

async function executar() {
    let valor = await retornarValor();

    await esperarPor(1500);
    console.log(`Async/Await ${valor}...`);

    await esperarPor(1500);
    console.log(`Async/Await ${valor + 1}...`);
    
    await esperarPor(1500);
    console.log(`Async/Await ${valor + 2}...`);

    return valor + 3;
}

executar().then(console.log);

console.log('fim');