const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um numero: "));

if (numero > 100) {
	console.log("Esse número é maior que 100")
}
