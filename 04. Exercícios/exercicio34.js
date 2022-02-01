// Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function estaContido(string1, string2) {
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();

    for (let i = 0; i < string1.length; i++) {
        if (!string2.includes(string1[i])) {
            return false;
        }
    }    

    return true;
}

function verificarString(string1, string2) {
    if (estaContido(string1, string2) && estaContido(string2, string1)) {
        return true;
    }
    return false;
 }

 console.log(verificarString('abc', 'cba'));
 console.log(verificarString('abc', 'cbad'));