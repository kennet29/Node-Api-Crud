import { Router } from "express";
import {
  getDiseños,
  getAllDiseños,
  createNewDiseño,
  getDiseñoById,
  deleteDiseñoById,
  getTotalDiseños,
} from "../controllers/diseñocontroller";

const { json } = require('express');

const router = Router();

router.get("/disenos", getDiseños);

router.get("/diseno", getAllDiseños);

router.post("/disenos", createNewDiseño);

router.get("/diseños/:id", getDiseñoById,);

router.delete("/diseños/:id",deleteDiseñoById);

router.put("/diseños/:id", getTotalDiseños)

export default router;