const prompt = require("prompt-sync")();

let idade = Number(prompt("Insira sua idade: "));
let subtracao = 2026 - idade;

console.log("Você nasceu por volta de " + subtracao);

