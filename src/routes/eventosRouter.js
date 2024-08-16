import { Router } from "express";

import { criarEvento, listarEvento, editarEvento , deletarEvento} from "../controllers/eventosControllers.js";

import {register, listarPalestrante} from "../controllers/palestranteControllers.js"

import { novoParticipante } from "../controllers/ParticipantesControllers.js";

import { criarFeedback } from "../controllers/feedbackControllers.js";

const router = Router();

router.post("/criar", criarEvento) 
router.post("/participantes/registrar", novoParticipante)
router.post("/palestrante/registrar", register) 
router.post("/feedback", criarFeedback ) 
router.put("/editar", editarEvento ) 
router.get("/palestrante", listarPalestrante ) 
router.get("/agenda", listarEvento ) 
router.delete("/cancelar", deletarEvento ) 

export default router;