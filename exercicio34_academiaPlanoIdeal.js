const prompt = require("prompt-sync")();

let diasPorSemana = Number(prompt("Qual será a sua frequência semanal? "));

if (diasPorSemana <= 2){
	console.log("Plano sugerido: Básico");
}
else if (diasPorSemana <= 4){
	console.log("Plano sugerido: Intermediário");
}
else {
	console.log("Plano sugerido: Premium");
}