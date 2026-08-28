const prompt = require("prompt-sync")();

let senhaDigitada = prompt("Insira a sua senha: ");

if (senhaDigitada == 1234){
	console.log("Acesso liberado");
}
else {
	console.log("Senha Incorreta");
}
