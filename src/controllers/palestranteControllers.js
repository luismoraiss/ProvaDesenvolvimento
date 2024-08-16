import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid";

export const register = (request, response) => {
  const { nome, expertise } = request.body;

  const id = uuidv4();

  const insertSQL = /*sql*/ `INSERT INTO palestrantes(??, ??, ??) VALUES (?,?,?)`;
  const insertData = [
    "palestranteId",
    "nome",
    "expertise",
    id,
    nome,
    expertise,
  ];
  conn.query(insertSQL, insertData, (err) => {
    if (err) {
      console.error(err);
      response.status(500).json({ err: "Erro ao cadastrar palestrante" });
      return;
    }

    const palestranteSql = /*sql*/ `SELECT * FROM palestrantes WHERE ?? = ?`;
    const palestranteData = ["palestranteId", id];
    conn.query(palestranteSql, palestranteData, async (err, data) => {
      if (err) {
        console.error(err);
        response.status(500).json({ err: "Erro ao selecionar palestrante" });
        return;
      }
      response.status(200).json({ message: "Palestrante cadastrado" });
    });
  });
};

export const listarPalestrante = (request, response) => {
  const sql = /*sql*/ `SELECT * FROM palestrantes`;
  conn.query(sql, (err, data) => {
    if (err) {
      response.status(500).json({ message: "Erro ao buscar os palestrantes" });
      return console.log(err);
    }
    const palestrantes = data;

    response.status(200).json(palestrantes);
  });
};
