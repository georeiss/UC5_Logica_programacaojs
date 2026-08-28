const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a sua idade: "));

if (idade >= 18) {
	console.log("Você já pode tirar sua CNH! ")
}
