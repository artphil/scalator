import { Request, Response } from "express";
import { Post } from "../models";

export const createOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    const data = await Post.create({ name });
    res.status(201).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAll = async (req: Request, res: Response): Promise<void> => {
  const data = await Post.findAll();
  res.json(data);
};

export const getById = async (req: Request, res: Response): Promise<void> => {
  const data = await Post.findByPk(req.params.id);
  if (data) res.json(data);
  else res.status(404).json({ error: "Escala não encontrada" });
};

export const updateOne = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.body;
  const [updated] = await Post.update(
    { name },
    { where: { id: req.params.id } }
  );
  if (updated) res.json({ success: true });
  else res.status(404).json({ error: "Escala não encontrada" });
};

export const deleteOne = async (req: Request, res: Response): Promise<void> => {
  const deleted = await Post.destroy({ where: { id: req.params.id } });
  if (deleted) res.json({ success: true });
  else res.status(404).json({ error: "Escala não encontrada" });
};
