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
//soma(15,1)

function criarUsuario(nome, email, senha, tipo){
    const usuario = {
        nome, // ou apenas "nome," pois os atributos e os parâmetros são iguais
        email,
        senha,
        tipo
    }
    //console.log(usuario)
}

//criarUsuario("Jorge L Castro", "Castrobb49150@hotmail.com", "1234", "admin")

//valores padrões sempre devem ser os últimos nos parâmetros.
function novoUsuario(nome, email, senha, tipo = "admin"){
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)
}
//atributo "tipo" não definido abaixo
novoUsuario("Jorge", "castrinho@hothot", "112")