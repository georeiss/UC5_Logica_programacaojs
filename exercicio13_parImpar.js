const prompt = require("prompt-sync")();

let numero = Number(prompt("Insira um numero: "));

let restoDivisao = numero % 2;

if (restoDivisao == 0){
	console.log("Par");
}
else {
	console.log("Ímpar");
}

