function Pessoa() {
    this.idade = 0;

    setInterval(function() {
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000);

    // opção sem utilizar o bind
    /*const self = this;    

    setInterval(function() {
        self.idade++;
        console.log(self.idade);
    }, 1000);*/
}

new Pessoa();