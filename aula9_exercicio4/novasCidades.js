const turistName = prompt("Digite o nome do turista: ");
var cityVisit = prompt("Esse turista já visitou alguma cidade? ");

let count = 0;
let cities = "";

while (cityVisit === "sim") {
  const cityName = prompt("Qual o nome da cidade que ele(a) visitou? ");
  cities += "-" + cityName + "\n";
  count++;
  cityVisit = prompt("Alguma outra cidade foi visitada?");
}
alert(
  "O turista " +
    turistName +
    " visitou " +
    count +
    " cidades, que são as cidades de:\n" +
    cities
);
