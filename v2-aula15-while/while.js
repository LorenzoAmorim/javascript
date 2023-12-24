/**
 * ESTRUTURA DE REPETIÇÃO:
 * SERVE PARA EXECUTAR UM MESMO BLOCO DE CODIGO VARIAS VEZES
 */

/**
 * WHILE SERVE PARA CRIAR UM LAÇO DE REPETIÇÃO QUE É EXECUTADO ENQUANTO UMA DETERMINADA CONDIÇÃO
 * FOR VERDADEIRA
 */

let velocidade = 80

while(velocidade > 0){
    alert("O carro está a " + velocidade + "km/h")
    velocidade -= 20
    alert("Diminuindo 20km/h")
}
alert ("O carro parou")



//TESTES

/*let velocidade1 = prompt("Qual a velocidade do carro?")

while(velocidade1 => 150){
    alert("uau que rápido!!!!!!!")
    alert("teremos que diminuir sua rapidez...")
    velocidade1 -= 35
    alert("diminuindo 35 km/h")
    alert("você está agora a " + velocidade1 + "km/h")

    if(velocidade1 <= 90){
        alert("pronto, velocidade de " + velocidade1 + "km/h permitida")
        break
    }else(
        alert("mais um poquito só")
    )
    
}*/

/*while(velocidade > 0){
    alert("O carro está a " + velocidade + "km/h")
    velocidade -= 20
    alert("Diminuindo 20km/h")

    if(velocidade === 40){
        alert("O carro ficará em " + velocidade + "km/h")
        break
    }
}*/