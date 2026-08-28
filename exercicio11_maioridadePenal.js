const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a sua idade: "));

if (idade >= 18) {
	console.log("Você já atingiu a maioridade penal")
}

