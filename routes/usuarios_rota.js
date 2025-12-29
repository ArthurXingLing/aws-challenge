import { listar_usuariosController, criar_usuarioController, update_usuarioController, delete_usuarioController } from "../controllers/usuarios_controller.js";

import express from "express"

const router = express.Router()

router.get("/", listar_usuariosController)
router.post("/", criar_usuarioController)
router.put("/:id", update_usuarioController)
router.delete("/:id", delete_usuarioController)

export default router;