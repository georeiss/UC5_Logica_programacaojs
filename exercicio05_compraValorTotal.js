const prompt = require("prompt-sync")();

let produto = prompt("Digite o produto: ");
let preco = Number(prompt("Digite o preço: "));
let quantidade = Number(prompt("Digite a quantidade: "));

let valorTotal = preco * quantidade;

console.log(quantidade + "x" + produto + " --- Total:R$" + valorTotal);