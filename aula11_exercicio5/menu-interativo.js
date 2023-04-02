let options = "";

do {
  options = prompt(
    "Escolha uma das opções\nAs opções do menu são:\n1)Arroz e feijão\n 2)Massa com molho\n 3)Bolo de batata\n 4)Gelatina\n 5)Encerrar"
  );

  switch (options) {
    case "1":
      alert("Você escolheu arroz e feijão");
      break;
    case "2":
      alert("Você escolheu massa com molho");
      break;
    case "3":
      alert("Você escolheu bolo de batata");
      break;
    case "4":
      alert("Você escolheu gelatina");
      break;
    case "5":
      alert("Encerrando o menu!");
      break;
    default:
      alert("Opção inválida! Selecione uma das 5 opções disponíveis");
  }
} while (options !== 5);
