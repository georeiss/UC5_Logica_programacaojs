const prompt = require("prompt-sync")();

let media = Number(prompt("Digite a sua media: "));
let frequencia = Number(prompt("Digite a sua frequencia: "));

if (media >= 7 && frequencia >= 75) {
	console.log("Aprovado.");
}
else {
	console.log("Reprovado.");
}
