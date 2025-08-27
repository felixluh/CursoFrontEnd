import "./ToDoList.css"

const ToDoList = () => ({ terefas, removerTarefa}) => {
    return (
        <ul>
            {terefas.map((tarefa, index) => (
                <li key ={index}>
                    {tarefa}
                    <button onClick={()=>removerTarefa(index)}>Excluir</button>
                </li>
            ))}
        </ul>
    )
}

export default ToDoList