import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid";

export const novoParticipante = (request, response) => {
    const {nome, email} = request.body;
  
    const id = uuidv4()
  
    const insertSQL = /*sql*/ `INSERT INTO participante( ??, ??,??) VALUES (?,?,?)`;
    const insertData = [
      "participante_id",
      "nome",
      "email",
      id,
      nome,
      email,
    ];
    conn.query(insertSQL, insertData, (err) => {
      if (err) {
        console.error(err)
        response.status(500).json({ err: "Erro ao cadastrar participante" });
        return;
      }
  
      const eventoSql = /*sql*/ `SELECT * FROM participante WHERE ?? = ?`;
      const eventoData = ["participante_id", id];
      conn.query(eventoSql, eventoData, async (err, data) => {
        if (err) {
          console.error(err);
          response.status(500).json({ err: "Erro ao selecionar participante" });
          return;
        }
        response.status(200).json({message: "Participante cadastrado"})
      });
    });
  };
  