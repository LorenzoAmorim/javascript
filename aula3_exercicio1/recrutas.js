const firstName = prompt("Insira o nome do recruta: ");
const secondName = prompt("Sobrenome: ");
const study = prompt("Campo de estudo: ");
const bday = prompt("Ano de nascimento: ");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "Nome completo: " +
    firstName +
    " " +
    secondName +
    "\nCampo de estudo: " +
    study +
    "\nIdade: " +
    (2023 - bday)
);
