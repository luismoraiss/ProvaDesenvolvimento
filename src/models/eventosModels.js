import conn from "../config/conn.js"

const tableEventos=/*sql*/`
CREATE TABLE IF NOT EXISTS eventos(
    id INT PRIMARY KEY NOT NULL,
    local VARCHAR(255) NOT NULL,
    palestrante VARCHAR(255) NOT NULL,
    horario VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
`

    conn.query(tableEventos, (err)=>{
        if(err){
            console.error(err)
            return
        }
        console.log("Tabela de [eventos] criada com sucesso")
    })