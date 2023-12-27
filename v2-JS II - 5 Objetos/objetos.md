# Objetos

## É uma estrutura do javascript para se trabalhar com dicionários chave-valor

## O par chave-valor em um objeto javascript é chamado de propriedade
A chave é como um nome da propriedade
O valor é o valor que está armazenado nessa propriedade (semelhantes aos valores armazenados em variáveis)

## Diferente dos arrays, seus elementos não possuem nenhuma sequência

## Uma propriedade também pode ter strings, números e booleanos como chave

## Uma propriedade pode armazenar qualquer tipo de dado como valor

## Pode ser criado através de chaves {}
let objeto = {}

## Suas propriedades e funções podem ser referenciadas por encadeamento com ponto "." ou colchetes []
### objeto.prop = "Olá, Mundo!"
### objeto.executar()

### let name = "prop"
### objeto[name] = "Olá, Mundo!"
### objeto.prop === objeto[name]
### let funcao = "executar"
### objeto[funcao]()