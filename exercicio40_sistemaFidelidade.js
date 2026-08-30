const prompt = require("prompt-sync")();

let valorCompra = Number(prompt("Digite o valor da compra: "));
let pontos = valorCompra / 10;

if (valorCompra >= 500){
	console.log("Pontos ganhos: " + (pontos + 50));
}
else {
	console.log("Pontos ganhos: " + pontos);
}