const prompt = require("prompt-sync")();

let valorCompra = Number(prompt("Digite o valor da compra: "));

if (valorCompra >= 100) {
	let desconto = valorCompra * 0.10;
	console.log("Valor final: R$" + (valorCompra - desconto));
	
}
else {
	console.log("Valor final: R$" + valorCompra);
}