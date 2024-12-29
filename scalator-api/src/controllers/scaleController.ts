import { Request, Response } from "express";
import Scale from "../models/scale";
import { ScalePost } from "../models";

export const createOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, title, init, end } = req.body;
    const data = await Scale.create({ name, title, init, end });
    res.status(201).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAll = async (req: Request, res: Response): Promise<void> => {
  const data = await Scale.findAll();
  res.json(data);
};

export const getById = async (req: Request, res: Response): Promise<void> => {
  const data = await Scale.findOne({
    where: { id: req.params.id },
    include: [{ model: ScalePost, as: "posts" }],
  });
  if (data) res.json(data);
  else res.status(404).json({ error: "Escala não encontrada" });
};

export const updateOne = async (req: Request, res: Response): Promise<void> => {
  const { name, title, init, end } = req.body;
  const [updated] = await Scale.update(
    { name, title, init, end },
    { where: { id: req.params.id } }
  );
  if (updated) res.json({ success: true });
  else res.status(404).json({ error: "Escala não encontrada" });
};

export const deleteOne = async (req: Request, res: Response): Promise<void> => {
  const deleted = await Scale.destroy({ where: { id: req.params.id } });
  if (deleted) res.json({ success: true });
  else res.status(404).json({ error: "Escala não encontrada" });
};
