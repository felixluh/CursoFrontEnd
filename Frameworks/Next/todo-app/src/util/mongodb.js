//arquivo que vai auxiliar a conexão

//importar a biblioteca do mongodb

import mongoose from "mongoose";

//arrow fuction
const connectMongo = async () => {
  mongoose.connect(process.env.DATABASE_URL) //estabelcer a conexão com o mongo
  .then(()=>console.log("Conectado ao MongoDB"))
  .catch(err => console.error("Erro ao conectar ao MongoDB", err));
}

export default connectMongo;