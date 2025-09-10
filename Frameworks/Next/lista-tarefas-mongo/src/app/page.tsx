"use client";
import { ITarefa } from "@/models/tarefa";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { json } from "stream/consumers";

 //indicar que é a tela usada pelo cliente

export default function Home(){
  //useState = armazenamento do localStorage
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [newTarefa, setNewTarefa] = useState<string>("");

  //useEffect
  useEffect(()=>{
    //fazer o uaseEffect no carregamento da tela inicial
    fetchTarefas(); //carregar todas as tareafas do banco de dados
  }, []);

  //carregar tarefas
  const fetchTarefas = async () => {
    try {
      const resposta = await fetch("/api/tarefas"); // realiz a conexão com o backend
      const data = await resposta.json(); //verificar se estar em json
      if(data.success){
        setTarefas(data.data)
      }
    } catch (error) {
     console.error(error);
    }
  }


//add tarefa
const addTarefa = async (e: FormEvent) =>{
  e.preventDefault(); //evita o carregamento da tela
  if(!newTarefa.trim()) return;
  try {
    const resultado = await fetch("/api/tarefas", {
      method: "POST",
      headers: {"Content-Type": "application/jon"},
      body: JSON.stringify({titulo:newTarefa})
    });
    const data = await resultado.json();
    if(data.success){ //se resultado for ok
      setTarefas([...tarefas, data.data]); //adiciona a nova tarefa no vetor
      setNewTarefa(""); //limpo o campo do input
    }
  } catch (error) {
     console.error(error);
  }
}

//update tarefa
const atualizarTarefa = async (e: FormEvent) => {
  e.preventDefault(); 
  return;
}
//delete tarefa
const deletarTarefa = async () => {

}

return(
  <div>
    <h1>Lista de Tarefa</h1>
    <form onSubmit={addTarefa}>
      <input type="text"
      value={newTarefa}
      onChange={(e:ChangeEvent<HTMLInputElement>)=> setNewTarefa(e.target.value)}
      placeholder="Adicione uma nova Tarefa"/>
      <button type="submit">Adicionar Tarefa</button>
    </form>
    <ul>
        {tarefas.map((tarefa)=> (
          <li key={tarefa._id.toString()}>

          </li>
        ))}
      </ul>

    </div>
  );

}