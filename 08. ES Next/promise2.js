/*setTimeout(() => {
    console.log('Executando callback...');

    setTimeout(() => {
        console.log('Executando callback...');

        setTimeout(() => {
            console.log('Executando callback...');
        }, 2000);
    }, 2000);
}, 2000);*/

function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando promise...');
            resolve('Vishhh');
        }, tempo);        
    })
}

esperarPor()
    .then(esperarPor())
    .then(esperarPor());