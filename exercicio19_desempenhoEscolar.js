const prompt = require("prompt-sync")();

let nota = Number(prompt("Digite a sua nota: "));

if (nota <= 5){
	console.log("Insuficiente");
}
else if (nota == 6){
	console.log("Regular");
}
else if (nota <= 9){
	console.log("Bom");
}
else {
	console.log("Excelente");
}