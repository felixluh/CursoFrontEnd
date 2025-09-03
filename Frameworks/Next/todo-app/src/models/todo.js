//montar o schema da tabela


import mongoose from "mongoose";

//function para definir o schema
const TodoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "O título é Obrigatório"],
        trim: true, //remove os espaços do inicio e do fim
        maxLength: [100, "não pode mais de 100char"] //limite de caracteres
},
    completed: {
        type: Boolean,
        default: false, // o Padrão é que seja falsa
    },
    createdAt: {
        type: Date,
        default: Date.now, //Registra a Data do momento da criação da tarefa
    }
});

export default TodoSchema;