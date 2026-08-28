const prompt = require("prompt-sync")();

let temperatura = Number(prompt("Insira a temperatura do dia: "));

if (temperatura >= 28){
	console.log("Sugestão: praia");
}
else {
	console.log("Sugestão: montanha");
}