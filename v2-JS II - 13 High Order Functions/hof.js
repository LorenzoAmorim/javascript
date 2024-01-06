// HIGH ORDER FUNCTION -
// é uma função que recebe outra função como parâmetro

function calcular(a,b,operacao){
    console.log("Realizando uma operação")
    const resultado = operacao(a,b)
    return resultado
}

function somar(x,y){
    console.log("Realizando uma soma")
    return x+y
}

// aqui é chamada a função 'calcular' recebendo como parâmetro o valor 3 e 5, e
// outra função, 'somar', então o resultado mostraria a soma desses 2 valores.
console.log(calcular(3,5,somar))

// mesma lógica que acima, porém o último parâmetro recebido é uma
// função anônima, ao invés de criar outra função de subtração
console.log(calcular(8,4, function(x,y){
        console.log("Realizando uma subtração")
        return x-y
        }
    )
)

// outro exemplo de high order function é 'forEach'
function exibirElemento(elemento,indice,array){
    console.log(
        [elemento,indice,array]
    )
}

const lista = ["Maçã", "Banana", "Pera", "Uva"]
// forma tradicional para exibir um elemento high order
for(let i = 0; i<lista.length; i++){
    exibirElemento(lista[i], i, lista)
}

console.log("=======================")

// forma funcional
lista.forEach(exibirElemento)

console.log("=======================")

// forma em que é usada a função anônima, assim não precisaria ter feito a função
// 'exibirElemento' a cima
lista.forEach(function(elemento,indice,array){
    console.log(
        [elemento,indice,array]
    )
})