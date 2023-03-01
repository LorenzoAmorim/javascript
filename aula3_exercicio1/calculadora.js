const primeiroNumero = prompt("Digite um valor: ");
const segundoNumero = prompt("Digite um segundo valor: ");

const x = parseFloat(primeiroNumero);
const y = parseFloat(segundoNumero);

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  "Valores Guardados!\n" +
    "A soma desses dois valores são: " +
    soma +
    "\nA subtração desses dois valores são: " +
    subtracao +
    "\nA multiplicação desses dois valores são: " +
    multiplicacao +
    "\nA divisão desses dois valores são: " +
    divisao
);
