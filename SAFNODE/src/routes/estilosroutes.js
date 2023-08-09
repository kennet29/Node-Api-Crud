import { Router } from "express";
import {
getEstilos,
  getAllEstilos,
  createNewEstilo,
  getEstiloById,
  deleteEstiloById,
  getTotalEstilos,
} from "../controllers/estiloscontroller";

const { json } = require('express');

const router = Router();

router.get("/estilo", getEstilos);

router.get("/estilos", getAllEstilos);

router.post("/estilos", createNewEstilo);

router.get("/estilos/:id", getEstiloById);

router.delete("/estilos/:id",deleteEstiloById);

router.put("/estilos/:id", getTotalEstilos)

export default router;