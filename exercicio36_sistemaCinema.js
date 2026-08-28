const prompt = require("prompt-sync")();

let nome = prompt("Digite o seu nome: ");
let idade = Number(prompt("Digite a sua idade: "));
let possuiIngresso = prompt("Possui ingresso? ");

if (idade >= 16 && possuiIngresso == "sim"){
	console.log("Entrada liberada.");
}
else if (idade >= 16 && possuiIngresso == "nao"){
	console.log("Falta de ingresso.");
}
else if (idade < 16 && possuiIngresso == "sim") {
	console.log("Idade insuficiente.");
}
else {
	console.log("Idade insuficiente e falta de ingresso.");
}