const prompt = require("prompt-sync")();

let horas = Number(prompt("Quantas horas o veículo ficou estacionado? "));

if(horas <= 1){
	console.log("Total a pagar: R$5.00");
}
else if (horas <= 4){
	console.log("Total a pagar: R$" + (horas * 4));
}
else {
	console.log("Total a pagar: R$" + (horas * 3));
} 