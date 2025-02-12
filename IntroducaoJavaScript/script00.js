// Introdução JavaScript

// Tipos de Dados (escopo, tipagem)

//tipo - String - texto
var nome = "João"; // variavel de escopo global
nome = "José"; // redefinir valor
var nome = "Pedro"; //redeclaração

// tipo - Number - número
let idade = 25; //variavel de escopo local
idade = 26; // redefinir valor
// let idade = 30; // não é possivel redeclarar, gera erro 

// tipo - Number - número
const PI = 3.1415; //constante
// PI = 3.9876; // erro, não pode redefinir
// const PI = 4.569; //não pode redeclarar

//tipo Boolenan
var aprovado = true;

// tipo undefined
var media;

// tipo null - vazio
var info = null;


console.log("Nome:"+nome); // imprimir no terminal
console.log("idade:"+idade);
console.log("PI:" +PI);
console.log("aprovação:"+aprovado);
console.log("media:"+media);
console.log("informações:"+info);
