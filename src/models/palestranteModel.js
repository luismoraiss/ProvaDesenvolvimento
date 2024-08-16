import conn from "../config/conn.js";

const tablePalestrantes = /*sql*/ `
CREATE TABLE IF NOT EXISTS palestrantes(
    palestranteId VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    expertise VARCHAR(200) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
`;

conn.query(tablePalestrantes, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Tabela de [palestrantes] criada com sucesso");
});
