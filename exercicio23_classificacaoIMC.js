const prompt = require("prompt-sync")();

let peso = Number(prompt("Digite o seu peso: "));
let altura = Number(prompt("Digite a sua altura: "));

let imc = peso / (altura * altura);

if (imc < 18.5){
	console.log("IMC: " + imc + " -- Abaixo do peso.");
}
else if (imc <= 24.9){
	console.log("IMC: " + imc + " -- Peso normal.");
}
else if (imc <= 29.9){
	console.log("IMC: " + imc + " -- Sobrepeso.");
}
else {
	console.log("IMC: " + imc + " -- Obesidade.");
}