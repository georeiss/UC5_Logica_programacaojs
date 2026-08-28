const prompt = require("prompt-sync")();

let usuario = prompt("Digite seu usuario: ");
let senha = prompt("Digite sua senha: "); 

if (usuario === "admin" && senha === "1234"){
	console.log("Acesso liberado")
}
else {
	console.log("Usuario ou senha incorretos");
}