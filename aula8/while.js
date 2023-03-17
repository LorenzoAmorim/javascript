let velocidade = 80;

while (velocidade > 0) {
  alert("O carro está a " + velocidade + " km/h");
  velocidade -= 20;
  alert("o carro diminuiu 20km/h");

  if (velocidade === 40) {
    alert("o carro chegou a 40km/h");
    break;
  }
}
alert("o carro parou!");
