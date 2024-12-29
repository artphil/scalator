import { Router } from "express";
import {
  createOne,
  getAll,
  getById,
  updateOne,
  deleteOne,
} from "../controllers/scalePostController";

const router = Router();

router.post("/scale-posts", createOne);
router.get("/scale-posts/:scaleId", getAll);
router.get("/scale-posts/:id", getById);
router.put("/scale-posts/:id", updateOne);
router.delete("/scale-posts/:id", deleteOne);

export default router;
