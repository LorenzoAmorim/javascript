/**
 * BLOCOS DE CÓDIGOS CONDICIONAIS COMO O 'IF', PORÉM COM UMA ESTRUTURA QUE AVALIA
 * UMA EXPRESSÃO E TESTA O RESULTADO CONTRA VÁRIOS CASOS, EXECUTANDO OS CASOS CORRESPONDENTES
 */

const resultado = prompt("Escolha uma das alternativas:\na)\nb)\nc)")

switch(resultado){
    case "a":
        alert ("O resultado é 'a'")
        break
    case "b":
        alert ("o resultado é 'b'")
        break
    case "c":
        alert("O resultado é 'c'")
        break
    default:
        alert("finalizando...")
}