const prompt = require("prompt-sync")();

let valorConta = Number(prompt("Digite o valor da compra: "));
let notaAtendimento = Number(prompt("Avalie o atendimento de 0 - 10: "));

if (notaAtendimento >= 8){
	console.log("Gorjeta sugerida: R$" + (0.15 * valorConta));
}
else if (notaAtendimento >= 5){
	console.log("Gorjeta sugerida: R$" + (0.10 * valorConta));
}
else {
	console.log("Gorjeta opcional");
}