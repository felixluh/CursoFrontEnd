// Script Para a Lista de Tarefas -> DOM

document.body.style.backgroundColor = "gray";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "Arial";
let container = document.querySelector(".container");
container.style.width = "50%";
container.style.backgroundColor = "lightblue";
container.style.margin = "auto";
container.style.padding = "30px";
container.style.borderRadius = "15px"
let tarefa = document.getElementById("tarefa"); //input
tarefa.style.width = "50%";
tarefa.style.pedding = "5px";
tarefa.style.borderRadius = "5px"; 
let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.style.padding = "6px 10px";
btnEnviar.style.border = "none";
btnEnviar.style.background = "green";
btnEnviar.style.color = "aliceblue";
btnEnviar.style.borderRadius = "5px";
btnEnviar.style.cursor = "pointer";

//logica de funcionamento da lista de tarefas

//criar o ouvinte para tarefa
btnEnviar.addEventListener(
    "click", criarTarefa
);

function criarTarefa(){
    let texto = tarefa.value.trim();
    if(texto === ""){
        return;
    }
    //se não estiver vazio
    let li = document.createElement("li");
    li.innerHTML = texto+'<button onclick="removeTarefa(this)"class="btnRemove">Remover</button';
    //adicionar o li -> ul
    let ul = document.getElementById("listaTarefas");
    ul.appendChild(li);
    //apaga o campo do input
    tarefa.value = "";
}

//function Remover
function removeTarefa(botao){
    botao.parentElement.remove();
}

//mudar cor de fundos
document.getElementById("mudarCor").addEventListener("click", function() {
    let cores = ["red", "blue", "green", "purple", "orange"];
    document.body.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
});