const prompt = require("prompt-sync")();

let valorCompra = Number(prompt("Digite o valor da sua compra: "));
let temCupom = prompt("Tem cupom de desconto? (sim) (nao) ");

if (valorCompra >= 150 && temCupom === "sim"){
	console.log("Valor com desconto: R$" + valorCompra - (15 * valorCompra / 100))
}
