import conn from "../config/conn.js";

const tableEventos = /*sql*/ `
CREATE TABLE IF NOT EXISTS eventos(
    evento_id VARCHAR(255) PRIMARY KEY NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    palestranteId VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (palestranteId) REFERENCES palestrantes(palestranteId)
)
`;

conn.query(tableEventos, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Tabela de [eventos] criada com sucesso");
});
