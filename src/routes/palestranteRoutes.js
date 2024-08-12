import { Router } from "express";

import {register, listarPalestrante} from "../controllers/palestranteControllers.js"

const router = Router();

//localhost:3333/usuarios/register/

router.post("/palestrante/register", register) 
router.get("/palestrante", listarPalestrante ) 
export default router;
