const prompt = require("prompt-sync")();

let velocidade = Number(prompt("Digite a velocidade de um veiculo: "));

if (velocidade <= 40){
	console.log("Velocidade: Baixa");
}
else if (velocidade <= 70){
	console.log("Velocidade: Moderada");
}
else if (velocidade <= 90){
	console.log("Velocidade: Alta");
}
else {
	console.log("Velocidade: Muito alta")
}