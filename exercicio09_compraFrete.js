const prompt = require("prompt-sync")();

let valorCompra = Number(prompt("Digite o valor da sua compra: "));

if (valorCompra > 200){
	console.log("Sua compra pode ter frete grátis!")
}