// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente
// ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function exibirDia(dia) {
    switch(dia) {
        case 1:
            console.log(`Dia ${dia} é fim de semana.`);
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            console.log(`Dia ${dia} é útil.`);
            break;
        case 7:
            console.log(`Dia ${dia} é fim de semana.`);
            break;
        default: 
            console.log(`Dia ${dia} é inválido.`);            
    }
}

exibirDia(0);
exibirDia(1);
exibirDia(2);
exibirDia(3);
exibirDia(4);
exibirDia(5);
exibirDia(6);
exibirDia(7);
exibirDia(8);