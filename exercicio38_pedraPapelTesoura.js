const prompt = require("prompt-sync")();

let jogador1 = prompt("Jogador 1 escolha: (pedra) (papel) (tesoura) ");
let jogador2 = prompt("Jogador 2 escolha: (pedra) (papel) (tesoura) ");

if (jogador1 === jogador2){
	console.log("Empate!");
}
else if (jogador1 == "pedra" && jogador2 == "papel"){
	console.log("Jogador 2 venceu!");
}
else if (jogador1 == "pedra" && jogador2 == "tesoura"){
	console.log("Jogador 1 venceu!");
}
else if (jogador1 == "papel" && jogador2 == "pedra"){
	console.log("Jogador 1 venceu!");
} 
else if (jogador1 == "papel" && jogador2 == "tesoura"){
	console.log("Jogador 2 venceu!");
}
else if (jogador1 == "tesoura" && jogador2 == "pedra"){
	console.log("Jogador 2 venceu!");
}
else {
	console.log("Jogador 1 venceu!");
}