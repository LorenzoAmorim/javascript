const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// MAP
// primeiro exemplo, sem a função map

/* ================
const nomes = []
for(let i = 0; i<personagens.length; i++){
    nomes.push(personagens[i].nome)
}
console.log(nomes)
================ */

// segundo exemplo, com a função map
// MAP: permite obter um novo array a partir de um array existenste
const nomes = personagens.map(function(personagem){
    return personagem.nome
})
console.log('MAP')
console.log(nomes)


// FILTER
// primeiro exemplo, sem a função filter

/*======================
const orcs = []
for(let i = 0; i<personagens.length; i++){
    if(personagens[i].raca === "Orc"){
        orcs.push(personagens[i])
    }
}
console.log(orcs)
======================*/

// segundo exemplo, com a função filter
// FILTER: permite obter um novo array contendo apenas elementos 
// específicos de um array existente
const orcs = personagens.filter(function(personagem){
    return personagem.raca === "Orc"
    }
)
console.log('FILTER')
console.log(orcs)


// REDUCE
// serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
const nivelTotal = personagens.reduce(function(valorAcumulado,personagem){
    return valorAcumulado + personagem.nivel
},0)
console.log('REDUCE')
console.log(nivelTotal)

// outro exemplo
const racas = personagens.reduce(function (acumulador, personagem) {
        if (acumulador[personagem.raca]) {
            acumulador[personagem.raca].push(personagem)
        } else {
            acumulador[personagem.raca] = [personagem]
        }
            return acumulador
    }, {}
)

console.log('REDUCE 2')
console.log(racas)