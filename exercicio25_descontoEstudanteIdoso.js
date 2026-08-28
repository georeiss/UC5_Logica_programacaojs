const prompt = require("prompt-sync")();

let tipo = prompt("Qual o tipo da sua carteirinha? ");
let idade = Number(prompt("Qual a sua idade? "));

if (tipo == "estudante" || idade >= 60){
	console.log("Você tem direito a desconto!");
}
else {
	console.log("Você não tem direito a desconto.")
}