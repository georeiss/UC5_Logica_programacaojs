const prompt = require("prompt-sync")();

let vidas = Number(prompt("Seu personagem está com quantas vidas? "));
 
if (vidas == 0){
	console.log("Game Over");
}
else if (vidas < 2){
	console.log("Cuidado");
}
else {
	console.log("Tudo certo!");
}