const nota = prompt("Qual foi a sua nota de 0 a 10?:");

if (nota >= 7) {
  document.write("voce está aprovado! sua nota foi: " + nota + "<br");
} else if (nota < 7 && nota >= 5) {
  document.write("Você está de recuperação! sua nota foi: " + nota + "<br>");
} else {
  document.write("Você está reprovado! sua nota foi: " + nota + "<br>");
}
