//coponente para criar o formulário para criar uma nova tarefa
//import do css
import "./ToDoList";

import React, { useState } from "react";

//funçâo ToDoForm ->
const ToDoForm = ({ addTarefa }) => {
    //estado para ar,mazenar o valor do input(campo para inserir a tarefa)
    const [tarefa, settarefa] = useState
    //definir o UseState => paga um campo da pagina e usa o armazenamento local para armazenar as mudanças de estado
    //[primeiro campo o armazenamento, segundo campo a função de mudança de estdo]

    //função para atualizar o estado com o valor do input
    const handleSubmit = (e) => {
        //impedir o comportamento padrão do formulário (recarregar a pagina)
        e.preventDefault();
        //chamar a função addTarefa passando a tarefa com o valor do input
        //verificar se o campo não está vazio
        if (tarefa.trim() !== "") {
            //adiciiono a tarefa ao array de tarefas
            addTarefa(tarefa);
            //limpar o campo do input
            settarefa("");
        }
    };
    return (
        //retorna o formulário (o view)
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={tarefa}
                onChange={(e) => settarefa(e.target.value)}></input>
                <button type="submit">Adicionar</button>
        </form>
    );
}


export default ToDoForm;
//componente para criar o formulário para criar uma nova tarefa
//pode ser reutilizado em outros componentes (export)

