import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid";


export const criarEvento = (request, response) => {
  const { titulo, data, palestranteId } = request.body;

  const id = uuidv4();

  const insertSQL = /*sql*/ `INSERT INTO eventos( ??, ??, ??, ??) VALUES (?,?,?,? )`;
  const insertData = [
    "evento_id",
    "titulo",
    "data",
    "palestranteId",
    id,
    titulo,
    data,
    palestranteId,
  ];
  conn.query(insertSQL, insertData, (err) => {
    if (err) {
      console.error(err);
      response.status(500).json({ err: "Erro ao cadastrar evento" });
      return;
    }

    const eventoSql = /*sql*/ `SELECT * FROM eventos WHERE ?? = ?`;
    const eventoData = ["evento_id", id];
    conn.query(eventoSql, eventoData, async (err, data) => {
      if (err) {
        console.error(err);
        response.status(500).json({ err: "Erro ao selecionar evento" });
        return;
      }
      response.status(200).json({ message: "Evento cadastrado" });
    });
  });
};

export const listarEvento = (request, response) => {
  const id = /*sql*/ `SELECT id FROM eventos`;
  const sql = /*sql*/ `SELECT * FROM eventos`;
  conn.query(sql, id, (err, data) => {
    if (err) {
      response.status(500).json({ message: "Erro ao buscar os eventos" });
      return console.log(err);
    }
    const eventos = data;

    response.status(200).json(eventos);
  });
};

export const editarEvento = async (request, response) => {
  const { evento_id, titulo, data, palestranteId } = request.body;

  const checkSql = /*sql*/ `SELECT * FROM eventos WHERE evento_id = "${evento_id}"`;
  conn.query(checkSql, (err, dataa) => {
    if (err) {
      console.error(err);
      response.status(500).json({ message: "Erro ao buscar eventos" });
      return;
    }

    if (dataa.length === 0) {
      response.status(404).json({ message: "Eventos não encontrado" });
      return;
    }
    const updateSql = /*sql*/ `UPDATE eventos SET titulo = "${titulo}", data = "${data}", palestranteId = "${palestranteId}" WHERE evento_id = "${evento_id}"`;
    conn.query(updateSql, (err) => {
      if (err) {
        console.error(err);
        return response
          .status(500)
          .json({ message: "Erro ao atualizar Evento" });
      }
      response.status(200).json({ message: "Usuário atualizado" });
    });
  });
};


export const deletarEvento = (request, response) => {
  const { id } = request.params;
  const deleteSql = /*sql*/ `DELETE FROM eventos WHERE evento_id = "${id}"`
  conn.query(deleteSql, (err, info) => {
      if (err) {
          console.error(err)
          return response.status(500).json({ message: "Erro ao deletar funcionario" })
      }
      if (info.affectedcollum === 0) {
          return response.status(404).json({ message: "Evento não encontrado" })
      }
      response.status(200).send("Eventos Excluido")
      return
  })
}
