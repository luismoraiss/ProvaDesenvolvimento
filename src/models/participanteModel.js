import conn from "../config/conn.js"

const tableParticipante=/*sql*/`
CREATE TABLE IF NOT EXISTS participante(
    id INT PRIMARY KEY NOT NULL,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
`

    conn.query(tableParticipante, (err)=>{
        if(err){
            console.error(err)
            return
        }
        console.log("Tabela de [participante] criada com sucesso")
    })