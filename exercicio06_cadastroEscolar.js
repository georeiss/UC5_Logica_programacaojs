const prompt = require("prompt-sync")();

let matricula = Number(prompt("Digite a sua matricula: "));
let nome = prompt("Digite o seu nome: ");
let turma = prompt("Digite a sua turma: ");

console.log("Aluno " + nome + " (matricula " + matricula + ") " + "cadastrado na turma " + turma);