const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a sua idade: "));
let rendaMensal = Number(prompt("Digite a sua renda mensal: "));

if (idade >= 21 && rendaMensal >= 2000) {
	console.log("Emprestimo aprovado"); 
}
else {
	console.log("Emprestimo negado");
}