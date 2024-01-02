// função que não tem nome, para armazenar funções em outras variáveis

function somar (a,b){
    return a+b;
}
const operacao = somar
// console.log(operacao(4,5))

// observe que a função não tem nome, é definida diretamente pela variável
const subtrair = function(a, b){
    return a-b
}
// console.log(subtrair(23,56))