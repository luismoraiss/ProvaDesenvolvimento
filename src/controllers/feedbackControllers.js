import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid";

export const criarFeedback = (request, response) => {
  const { nota, comentario, participanteId, eventoId } = request.body;

  const id = uuidv4();

  const insertSQL = /*sql*/ `INSERT INTO feedback(??,??, ??, ??,??) VALUES (?,?,?,?,?)`;
  const insertData = [
    "feedback_id",
    "participante_id",
    "evento_id",
    "nota",
    "comentario",
    id,
    participanteId,
    eventoId,
    nota,
    comentario,
  ];

  conn.query(insertSQL, insertData, (err) => {
    if (err) {
      console.error(err);
      response.status(500).json({ err: "Erro ao cadastrar feedback" });
      return;
    }

    const feedbackSql = /*sql*/ `SELECT * FROM feedback WHERE ?? = ?`;
    const feedbackData = ["feedback_id", id];
    conn.query(feedbackSql, feedbackData, async (err, data) => {
      if (err) {
        console.error(err);
        response.status(500).json({ err: "Erro ao selecionar feedback" });
        return;
      }
      response.status(200).json({ message: "Feedback cadastrado" });
    });
  });
};


