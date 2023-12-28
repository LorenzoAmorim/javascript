function calcularMedia(a, b){
    const media = (a + b)/2
    return media
}
const resultado = calcularMedia(7,2)
//console.log(resultado)

function criarProduto(nome, preco){
    const produto = {nome, preco, estoque: 1}
    return produto
}
//console.log(criarProduto("Notebook intel i3 8gb ram", 2500))


function areaRetangular(base, altura){
    //podemos retornar os parâmetros direto, ao invés de criar uma variável
    //para fazer o cálculo
    return base * altura   
}

//função da área do quadrado chama a função da área do retangulo, trazendo no
//parâmetro 2x o lado
function areaQuadrada(lado){
    return areaRetangular(lado,lado)
}

console.log(areaRetangular(3,5))
//fórmula da área do retangulo é igual ao quadrado, porém 2x o lado
console.log(areaQuadrada(9))

//após o return o que vem depois não conta, a funçao acaba.
//uma função pode retornar apenas 1 vez
function ola(){
    let texto = "..."
    return texto
    texto = "Olá Mundo"
    console.log(texto)
}
console.log(ola())

//especifidade onde a função retorna mais de uma vez
function maioridade(idade){
    if(idade >= 18){
        return "maior de idade"
    }else{
        return "menor de idade"
    }
}
console.log(maioridade(22))
console.log(maioridade(17)) 