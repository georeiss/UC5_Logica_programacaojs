const prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do aluno: ");
let nota1 = Number(prompt("Digite a primeira nota do aluno: "));
let nota2 = Number(prompt("Digite a segunda nota do aluno: "));
let nota3 = Number(prompt("Digite a terceira nota do aluno: "));
let frequencia = Number(prompt("Digite a frequencia do aluno: "));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7 && frequencia >= 75){
	console.log("Aluno: " + nome + " Média: " + media + " Frequência: " + frequencia + "%" + " Situação: APROVADO");
}
else if (media >=5 && media <7 && frequencia >= 75){
	console.log("Aluno: " + nome + " Média: " + media + " Frequência: " + frequencia + "%" + " Situação: RECUPERAÇÃO");
}
else if (media < 5 && frequencia >= 75){
	console.log("Aluno: " + nome + " Média: " + media + " Frequência: " + frequencia + "%" + " Situação: REPROVADO POR NOTA");
}  
else if (media >=7 && frequencia < 75){
	console.log("Aluno: " + nome + " Média: " + media + " Frequência: " + frequencia + "%" + " Situação: REPROVADO POR FALTA");
}
else {
 console.log("Aluno: " + nome + " Média: " + media + " Frequência: " + frequencia + "%" + " Situação: REROVADO");
}