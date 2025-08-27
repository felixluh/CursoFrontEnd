import "./App.css"
import { useState } from "react";
import ToDoForm from "./componentes/TodoForm";
import ToDoList from "./componentes/ToDoList";

const App = () => {
  const [tarefas, setTarefas] = useState([]);
  //estado para armazenamento da lista de tarefas
  
  const addTarefa = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
    //adicionar a nova tarefa ao array de tarefas, ...tarefas => copia todas as tarefas
    // que já estão adicionadas anteriormentes
  };
   const removerTarefa = (index) => {
    setTarefas(tarefas.filter((_,i)=> i !== index));
    //filtra o array de tarefas, removendo a tarefa com o indice igual ao index
    //(_,i) => mantem o vetor original, com o nove índice 
   };

   //parte views do componente
   return(
    <div>
      <h1>To-Do-List APP</h1>
      <ToDoForm addTarefa={addTarefa}/>
      <ToDoList tarefas={tarefas} removerTarefa={removerTarefa}/>
    </div>
   );
}

export default App;
//componente principal do aplicativo
