const prompt = require("prompt-sync")();

let celsius = Number(prompt("Insira uma temperatura: "));

let fahrenheit = (celsius * 9/5) + 32;

console.log(celsius + "ºC equivalem a " + fahrenheit + "ºF");