import { Router } from "express";
import {
  getMateriales,
  getAllMateriales,
  createNewMaterial,
  getMaterialById,
 deleteMaterialById,
  getTotalMateriales,
  updateMaterialById,
} from "../controllers/materialescontroller";

const { json } = require('express');

const router = Router();

router.get("/products", getMateriales);

router.get("/productos",getAllMateriales);
 
router.post("/productos", createNewMaterial);

router.get("/products/count", getTotalMateriales);

router.get("/products/:id", getMaterialById);

router.delete("/products/:id",deleteMaterialById);

router.put("/productos/:id", updateMaterialById);

export default router;
