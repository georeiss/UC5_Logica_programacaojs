const prompt = require("prompt-sync")();

let nome = prompt("Insira seu nome: ");
let idade = Number(prompt("Insira sua idade: "));
let cidade = prompt("Insira a sua cidade: ");

console.log(nome + "," + idade + " anos," + " mora em " + cidade);

