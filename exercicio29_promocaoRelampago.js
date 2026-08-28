const prompt = require("prompt-sync")();

let valorCompra = Number(prompt("Digite o valor da sua compra: "));
let clienteVip = prompt("Você é cliente VIP? (sim) (nao) ");

if (valorCompra >= 300 || clienteVip === "sim"){
	console.log("Frete gratis liberado");
}
else {
	console.log("Frete normal");
}