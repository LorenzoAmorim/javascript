// escopo é o contexto onde a variável foi declarada podendo ser
//mais externo, ou mais interno(se estiver dentro de um bloco)

// Variáveis no escopo mais externo podem ser
// usadas dentro de escopos mais internos
let pokemon = "Charmander"
function evoluir(){
    pokemon = "Charmelon"
}
//console.log(pokemon)
evoluir()
//console.log(pokemon)

// Variáveis no escopo mais interno não podem ser
// usadas fora dele em escopos mais internos
function criarAnimal(){
    let animal = "Gato"
}
criarAnimal()
//console.log(animal) //gera um erro


// Apenas variáveis declaradas com var ficam
// disponíveis em um escopo mais externo
function avaliarNota(nota){
    if(nota > 60){
        var aprovado = true
        let situacao = "Aprovado"
    }else{
        var reprovado = false
        let situacao = "Reprovado"
    }

    //percebba que os 'console.log' estão no escopo mais externo da condição
    // console.log(nota)
    // console.log(aprovado)
    // console.log(situacao) //gera erro
}
avaliarNota(80)
avaliarNota(50)


// Mas mesmo o var não consegue "sair" para fora do escopo da função
function ola() {
    var texto = "Olá, mundo!"
}
// console.log(texto) // Gera erro

// Apenas variáveis declaradas com var são carregadas
// sempre no começo do código, acima de todo o resto
console.log(nome)
console.log(sobrenome)
var nome = "Isaac"
let sobrenome = "Pontes"
console.log(nome)
console.log(sobrenome)