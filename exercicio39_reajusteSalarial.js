const prompt = require("prompt-sync")();

let tempoEmpresa = Number(prompt("Digite o tempo de empresa do funcionário: "));
let desempenho = prompt("Digite o desempenho do funcionário: ");
let salario = Number(prompt("Digite o salário do funcionário: "));

if (tempoEmpresa >= 5 && desempenho === "Otimo"){
	console.log("Novo salário: R$" + (salario + salario * 15 / 100));
}
else if (tempoEmpresa >= 2 && desempenho === "Bom"){
	console.log("Novo salário: R$" + (salario + salario * 8 / 100));
}
else {
	console.log("Novo salário: R$" + (salario + salario * 3 / 100));
}