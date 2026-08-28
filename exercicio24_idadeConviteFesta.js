const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a sua idade: "));
let possuiConvite = prompt("Possui convite? (sim) (nao) ");

if (idade >= 18 && possuiConvite == "sim") {
	console.log("Entrada permitida.");
}
else {
	console.log("Entrada negada");
}