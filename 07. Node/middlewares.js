// middleware pattern (chain of responsibility)
const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1';
    next();
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2';
    next();
}

const passo3 = (contexto) => {
    contexto.valor3 = 'mid3';
}

const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](contexto, () => execPasso(indice + 1));
    }
    execPasso(0);
}

const contexto1 = {};
exec(contexto1, passo1, passo2, passo3);
console.log(contexto1);

const contexto2 = {};
exec(contexto2, passo2, passo1, passo3);
console.log(contexto2);

const contexto3 = {};
exec(contexto3, passo1, passo3);
console.log(contexto3);