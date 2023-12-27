const arr = ["1o nivel", 
["2o nível, 42, true"],
[
    ["3o nível, 1o item", "Olá, Mundo!"],
    ["3o nível, 2o item", "Oi, Mundo!"],
],
    []
]
console.log("Array principal")
console.log(arr)
console.log("Primeiro array - 0")
console.log(arr[0])
console.log("Segundo array - 1")
console.log(arr[1])
console.log(arr[1][0])
console.log("Terceiro array - 2")
console.log(arr[2])
console.log("Primeiro array no terceiro Array")
console.log(arr[2][0])
console.log("Segundo array no terceiro Array")
console.log(arr[2][1])
console.log(arr[2][0][0])
console.log(arr[2][0][1])
console.log(arr[2][1][0])
console.log(arr[2][1][1])
console.log("Quarto array  - 4")
console.log(arr[3])

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3","l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"]
]


//console.table faz com que o js formate sua matriz em uma tabela(se possível)

// console.table(matriz)

//".push" acrescenta novos elementos ao fim de um array e devolve o 
// novo comprimento do array.

/*matriz.push(["Nova linha"])
matriz[0].push("Nova Coluna")
console.table(matriz)*/


// ITERAÇÃO(PERCORRER) SOBRE CADA ELEMENTO E RESULTADO DA MATRIZ
for (let i = 0; i< matriz.length; i++){

    for(let j = 0; j<matriz[i].length; j++){
        const elemento = matriz[i][j]

        console.log("Posição: (" + i +", "+ j + " ) Valor: " + elemento)
    }
}