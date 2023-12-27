//O parâmetro é a entrada da função "x".
//é igual uma variável, porém fica disponível dentro da função e
//é informada na hora de chamar ela
function dobro(x){
    alert("O dobro de " + x + " é " + (x *2))
}
//dobro(2)
//dobro(20)

function dizerOla(nome = "mundo"){
    alert("Olá, " + nome + "!")
}
//dizerOla("Jorge L Castro")
//dizerOla()

function soma(a, b){
    valor = a +b
    alert("O valor das somas são " + valor)
}
soma(15,1)