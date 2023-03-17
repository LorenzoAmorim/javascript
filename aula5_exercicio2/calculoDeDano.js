const nameAttack = prompt("Insira o nome do personagem que irá atacar: ");
var powerAttack = prompt("Poder de ataque desse personagem: ");

const victim = prompt("Insira o nome do personagem que irá defender: ");
let lifePoints = prompt("Quantidade de pontos de vida: ");
var powerDefense = prompt("Poder de defesa: ");
var shield = prompt("Ele possui um escudo (sim ou não)? ");

let damage = 0;

if (powerAttack > powerDefense && shield === "não") {
  damage = powerAttack - powerDefense;
} else if (powerAttack > powerDefense && shield === "sim") {
  damage = (powerAttack - powerDefense) / 2;
} else damage = 0;

lifePoints -= damage;

alert("O " + nameAttack + " causou " + damage + " pontos de dano em " + victim);
alert(
  nameAttack +
    "\nPoder de ataque: " +
    powerAttack +
    "\n\n" +
    victim +
    "\nQuantidade de pontos de vida: " +
    lifePoints +
    "\nPoder de defesa: " +
    powerDefense +
    "\nPossuía escudo: " +
    shield
);
