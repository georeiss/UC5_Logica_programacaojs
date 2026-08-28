const prompt = require("prompt-sync")();

let nota = Number(prompt("Digite a sua nota: "));

if (nota >= 7) {
	console.log("Parabéns, você foi aprovado!")
} 