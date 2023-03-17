{
  var carro1 = prompt("Qual o nome do primeiro carro?");
  document.write("O nome do primeiro carro é: " + carro1 + "<br><br>");
}

{
  var velocidade1 = prompt("Qual a velocidade do primeiro carro?");
  document.write(
    "A velocidade do primeiro carro é: " + velocidade1 + "<br><br>"
  );
}
{
  var carro2 = prompt("Qual o nome do segundo carro?");
  document.write("O nome do segundo carro é: " + carro2 + "<br><br>");
}
{
  var velocidade2 = prompt("Qual a velocidade do segundo carro?");
  document.write(
    "A velocidade do segundo carro é: " + velocidade2 + "<br><br>"
  );
}

if (velocidade1 > velocidade2) {
  document.write(
    "O carro da marca " +
      carro1 +
      "\n" +
      "é mais rapido que o carro da marca " +
      carro2 +
      "<br>"
  );
} else if (velocidade1 < velocidade2) {
  document.write(
    "O carro da marca " +
      carro2 +
      "\n" +
      "é mais rápido que o carro da marca " +
      carro1 +
      "<br>"
  );
} else {
  document.write(
    "Os carros da marca " + carro1 + " e " + carro2 + " tem a mesma velocidade!"
  );
}
//
