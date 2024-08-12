import "dotenv/config";
import express from "express";

const PORT = process.env.PORT;

//! Importar conexão
import conn from "./config/conn.js";


//importar módulo
import'./models/palestranteModel.js';
import'./models/eventosModels.js';
import'./models/participanteModel.js';

//rotas
import palestranteRouter from "./routes/palestranteRoutes.js"

const app = express();
app.use(express.json());

app.use('/eventos', palestranteRouter)

//404
app.use((request, response) => {
  response.status(404).json({ message: "Recurso não encontrado" });
});

app.listen(PORT, () => {
  console.log("Server ON PORT " + PORT);
});
