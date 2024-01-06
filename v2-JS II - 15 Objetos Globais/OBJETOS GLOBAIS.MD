# OBJETOS GLOBAIS
## São objetos padrão da linguagem javascript que ficam sempre disponíveis para utilizarmos

## ATENÇÃO: não confundir com o objeto de escopo global window do navegador(ou o escopo global de outros ambientes)

## Alguns exemplos:
### Object:  
~~~ 
let pessoa = Object() 
pessoa {}
~~~
### Array
~~~
let lista = Array()
lista []

let lista = Array("A", "B", "C")
lista ['A', 'B', 'C']
~~~
### String
~~~
let a = String()
a = ''

String(42)
'42'
~~~
### Number
~~~
Number("42")
42

Number.IsInteger(4.5)
false

Number.IsInteger(4)
true
~~~
### Date
~~~
Date()
'Fri Jan 05 2024 22:55:10 GMT-0300 (Horário Padrão de Brasília)'
~~~
### Math
~~~
Math.PI
3.141.59
~~~

## Podem ser usados para criar e converter valores

## Possuem propriedades e funções úteis e frequentemente necessárias
