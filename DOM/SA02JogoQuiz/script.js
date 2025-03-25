// script para as perguntas do quiz

let perguntas = [];
let perguntasAtual = 0;

let perguntaElement = document.getElementById("pergunta")
let opcoesElement = document.getElementById("opcoes")
let proximaElement = document.getElementById("proxima")
let reultadoElement  = document.getElementById("resultado")

//carrregar as oerguntas do Arquivo Json
fetch("perguntas.json")
.then(response => response.json())
.then(data =>{
    perguntas = data;
    carregarPerguntas();
}).catch(error => console.error("Erro ao carregar perguntas:", error));

//criar a função para carregar as perguntas
function carregarPerguntas(){
    
}