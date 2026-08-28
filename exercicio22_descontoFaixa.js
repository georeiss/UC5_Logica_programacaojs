const prompt = require("prompt-sync")();

let valorCompra = Number(prompt("Qual o valor da compra? "));

let desconto1 = valorCompra * 20 / 100;

let desconto2 = valorCompra * 10 / 100;

let desconto3 = valorCompra * 5 / 100;

if (valorCompra == 500) {
	console.log("Valor final: ", valorCompra - desconto1)
}
else if (valorCompra == 200) {
	console.log("Valor final: ", valorCompra - desconto2)
}
else if (valorCompra == 100) {
	console.log("Valor final: ", valorCompra - desconto3)
}
else {
	console.log("Sem desconto")
}

