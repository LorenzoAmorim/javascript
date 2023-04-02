let quant = parseFloat(prompt("Qual a quantidade de dinheiro disponível? "));
let option = " ";

do {
  option = prompt(
    "Seu dinheiro disponível é R$" +
      quant +
      "\nO que você deseja fazer?\n" +
      "1- para adicionar\n" +
      "2- para remover\n" +
      "3- para sair\n"
  );

  switch (option) {
    case "1":
      quant += parseFloat(prompt("Quanto você deseja adicionar à sua conta? "));
      // alert("Seu saldo ficou em R$" + quant);
      break;
    case "2":
      quant -= parseFloat(prompt("Quanto você deseja remover da sua conta? "));
      // alert("Seu saldo ficou em R$" + quant);
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida, insira uma das opções disponíveis.");
  }
} while (option !== "3");

/*if ((option = "1")) {
      more = prompt("Quanto você deseja adicionar à sua conta? ");
      quant += more;
      alert("R$" + more + " adicionado à sua conta!");
      alert("Seu saldo ficou em R$" + quant);
  } else if ((option = "2")) {
      less = prompt("Quanto você deseja remover da sua conta? ");
      quant -= less;
      alert("R$" + less + " retirado da sua conta!");
      alert("Seu saldo ficou em R$" + quant);
  } else if ((option = "3")) {
      alert("Saindo...");
  } else alert = "Opção inválida, insira uma das opções disponíveis.";*/
