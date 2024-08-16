import conn from "../config/conn.js";

const tableFeedback = /*sql*/ `
CREATE TABLE IF NOT EXISTS feedback(
    feedback_id VARCHAR(255) PRIMARY KEY,
    nota INT NOT NULL,
    comentario VARCHAR(255) NOT NULL,
    participante_id VARCHAR(255),
    evento_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (participante_id) REFERENCES participante(participante_id),
    FOREIGN KEY (evento_id) REFERENCES eventos(evento_id)
)
`;

conn.query(tableFeedback, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Tabela de [feedback] criada com sucesso");
});
