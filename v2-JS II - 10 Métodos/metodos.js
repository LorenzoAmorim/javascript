let pessoa = {
    nome: "JC",
    idade: 22,
    // o método pode ser chamado dentro de um objeto(pessoa) e não é necessário
    // a palavra 'function'
    dizerOla(){
        console.log("olá mundo! eaeee " + this.nome)
        // o 'this' faz referencia ao atributo do próprio objeto
    }
}
console.log(pessoa)
pessoa.dizerOla()