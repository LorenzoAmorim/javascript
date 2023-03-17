const resultado = prompt("Escolha uma das alternativas:\na) \nb) \nc) \nd)");

const resultadoNumerico = parseFloat(resultado);

switch (resultadoNumerico) {
  case 1:
    alert("A sua resposta foi a letra 'a'");
    break;
  case 2:
    alert("A sua respot foi a letra 'b'");
    break;
  case 3:
    alert("A sua resposta foi a letra 'c'");
    break;
  case 4:
    alert("A sua resposta foi a letra 'd'");
    break;
  default:
    alert("Finalizando...");
}
