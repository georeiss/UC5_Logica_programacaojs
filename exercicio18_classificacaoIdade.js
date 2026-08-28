const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a sua idade: "));

if (idade < 14){
	console.log("Classificação: Criança");
}
else if (idade < 18) {
	console.log("Classificação: Adolescente");
}
else if (idade < 60) {
	console.log("Classificação: Adulto");
} 
else {
	console.log("Classificação: Idoso");
}