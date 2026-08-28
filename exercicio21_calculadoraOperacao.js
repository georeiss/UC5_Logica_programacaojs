const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Digite o primeiro numero: "));
let numero2 = Number(prompt("Digite o segundo numero: "));
let operacao = prompt("Escolha a operação desejada (soma) (subtracao) (divisao) (multiplicacao) ");

if (operacao == "soma"){
	console.log("Resultado: " + (numero1 + numero2)); 
}
else if (operacao == "subtracao"){
	console.log("Resultado: " + (numero1 - numero2));
}
else if (operacao == "divisao"){
	console.log("Resultado: " + (numero1 / numero2));
}
else {
	console.log("Resultado: " + (numero1 * numero2));
}