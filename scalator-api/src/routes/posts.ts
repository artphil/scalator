import { Router } from "express";
import {
  createOne,
  getAll,
  getById,
  updateOne,
  deleteOne,
} from "../controllers/postController";

const router = Router();

router.post("/posts", createOne);
router.get("/posts", getAll);
router.get("/posts/:id", getById);
router.put("/posts/:id", updateOne);
router.delete("/posts/:id", deleteOne);

export default router;
