function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++; // o this não varia dentro de uma função arrow
        console.log(this.idade);
    }, 1000);
}

new Pessoa();