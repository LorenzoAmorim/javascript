/**
 *  ÚTIL PARA REALIZAR REPETIÇÕES
 * FORMADO POR INICIALIZAÇÃO, CONDIÇÃO E FINALIZAÇÃO:
 * FOR(IN;COND;FIN){código}
 * 
 * UTILIZADO QUANDO QUEREMOS ITERAR(PERCORRER) UM NÚMERO FIXO DE VEZES.
 */

//loop for básico
for(i = 0; i<=10; i++){
     console.log ("'I' é igual a: " + i)
}

//loop for para contagem das letras de um nome
let nome = "Jorge Luis Castro"
for(i = 0; i <= nome.length; i++){
    console.log(nome[i])
}