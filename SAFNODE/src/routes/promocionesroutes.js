import { Router } from "express";
import {
  getPromociones,
  getAllPromociones,
  createNewPromocion,
  getPromocionById,
  deletePromocionById,
 
  updatePromocionById,
} from "../controllers/promocionescontroller";

const { json } = require('express');

const router = Router();

router.get("/promociones", getPromociones);

router.get("/promocion", getAllPromociones);

router.post("/promociones", createNewPromocion);

//router.get("/products/count", getTotalProducts);

router.get("/promociones/:id", getPromocionById);

router.delete("/promociones/:id", deletePromocionById);

router.put("/promociones/:id", updatePromocionById);

export default router;
