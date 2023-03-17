const metersValue = prompt("Digite algum valor em metro (M): ");

const converterValue = prompt(
  "Qual medida você quer converter os metros?\n1. milímetros\n2. centímetros\n3. decímetros\n4. decâmetros\n5. hectometros\n6. quilômetros"
);
//const metersValueNumber = parseFloat(metersValue);

milimetro = metersValue * 1000;
centimetro = metersValue * 100;
decimetro = metersValue * 10;
decametro = metersValue / 10;
hectometro = metersValue / 100;
quilometro = metersValue / 1000;

switch (converterValue) {
  case "1":
    alert(
      "O valor de " +
        metersValue +
        " metros em milímetros é de " +
        milimetro +
        "mm"
    );
    break;
  case "2":
    alert(
      "O valor de " +
        metersValue +
        " metros em centímetros é de " +
        centimetro +
        "cm"
    );
    break;
  case "3":
    alert(
      "O valor de " +
        metersValue +
        " metros em decímetros é de " +
        decimetro +
        "dm"
    );
    break;
  case "4":
    alert(
      "O valor de " +
        metersValue +
        " metros em decâmetros é de " +
        decametro +
        "dam"
    );
    break;
  case "5":
    alert(
      "O valor de " +
        metersValue +
        " metros em hectometros é de " +
        hectometro +
        "hm"
    );
    break;
  case "6":
    alert(
      "O valor de " +
        metersValue +
        " metros em quilometros é de " +
        quilometro +
        "km"
    );
    break;
  default:
    alert("Opção inválida");
}
