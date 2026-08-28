const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a sua idade: "));

if (idade <= 12 || idade >= 60){
	console.log("Valor do ingresso: R$15.00 (meia)");
}
else {
	console.log("Valor do ingresso: R$30.00");
}