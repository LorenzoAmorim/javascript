/**
 * NO DO WHILE A PRIMEIRA VERIFICAÇÃO DA CONDIÇÃO SO ACONTECE DEPOIS QUE O BLOCO FOI EXECUTADO UMA VEZ.
 * -FAÇA-  ALGUMA COISA -ENQUANTO- CONDIÇÃO.
 * ELE OBRIGATORIAMENTE EXECUTA O CÓDIGO, PELO MENOS 1 VEZ, INDEPENDETE SE A COND. FOR VERDADEIRA OU FALSA.
 * SE A CONDIÇÃO FOR VERDADEIRA ELE VOLTA E FAZ DENOVO, SE FOR FALSA ELE PARA, PORÉM JÁ EXECUTA PELO MENOS 1 VEZ.
 */


let velocidade = 0

do{
    alert("A velocidade do veículo é " + velocidade + "km/h")
    velocidade -= 20
}while(velocidade > 0)

alert("A velocidade final é de " + velocidade + "km/h")