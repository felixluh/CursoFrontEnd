// script para as perguntas do quiz

let perguntas = [];
let perguntaAtual = 0;

let perguntaElement = document.getElementById("pergunta")
let opcoesElement = document.getElementById("opcoes")
let proximaElement = document.getElementById("proxima")
let reultadoElement  = document.getElementById("resultado")

//carrregar as oerguntas do Arquivo Json
fethc("perguntas.json")
.then(response => response.json())
.then(data =>{
    perguntas = data;
    carregarPerguntas();
}).catch(error => console.error("Erro ao carregar perguntas:", error));

//criar a função para carregar as perguntas
function carregarPerguntas(){
    reultadoElement.innerText = "";
    proximaElement.disabled = true;
    
    if(perguntaAtual>=perguntas.length){// quando o index for maior ou igual nº de perguntas
        perguntaElement.innerText = "Quiz finalizado!";
        opçõesElement.InnerHTML = "";
        proximaElement.style.display = "none";
        return;
    }
    //escrever o código para mostrar as perguntas
    let p = perguntas[perguntaAtual];//coleção referente ao índice
    perguntaElement.innerText = p.pergunta;
    opcoesElement.innerHTML = "";
    //preencher as opções
    p.opcoes.array.forEach(opcao => {
        let btnOpcao = document.createElement("button");
        btnOpcao.innerText = opcao;
        btnOpcao.classList.add("opcao");//classe opcao 
        btnOpcao.addEventListener("click",()=> verificarResposta(opcao, btnOpcao))
        opcoesElement.appendChild(btnOpcao)
    });
    //função para verificar as resposta
function verificarResposta(opcao,btnOpcao){
let respostaCorreta = perguntas[perguntaAtual].resposta;

if(opcao === respostaCorreta){
    btnOpcao.classList.add("correta");
    resultadoElement.innerText = "Correto!!!";
}else{
    btnOpcao.classList.add("Errado");
    resultadoElement.innerText = "Errado!! A resposta Correta é "+respostaCorreta;
}
//configuração para desabilitar os botões
document.querySelectorAll(".opcao").forEach( botao => botao.disabled = true);
proximaElement.disabled = false;
}//fim da função verificar Resposta

//adicionar evento para o botão da proxima pergunta
proximaElement.addEventListener("click", () => {
    perguntaAtual++;
    carregarPerguntas();
})
}