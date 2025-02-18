//desafio 1
var prompt = require("prompt-sync")();

var idade = prompt("informe sua idade: ");
if(idade<18){
    console.log("menor de idade");
}else if(idade<60){
    console.log("adulto");
}else{
    console.log("idoso")
}

