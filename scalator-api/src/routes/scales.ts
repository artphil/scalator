import { Router } from "express";
import {
  createOne,
  getAll,
  getById,
  updateOne,
  deleteOne,
} from "../controllers/scaleController";

const router = Router();

router.post("/scales", createOne);
router.get("/scales", getAll);
router.get("/scales/:id", getById);
router.put("/scales/:id", updateOne);
router.delete("/scales/:id", deleteOne);

export default router;
