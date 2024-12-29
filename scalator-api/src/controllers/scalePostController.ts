import { Request, Response } from "express";
import { ScalePost } from "../models";

export const createOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const { scaleId, personId, postId, date } = req.body;
    const data = await ScalePost.create({ scaleId, personId, postId, date });
    res.status(201).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAll = async (req: Request, res: Response): Promise<void> => {
  const data = await ScalePost.findAll({
    where: { scaleId: req.params.scaleId },
  });
  res.json(data);
};

export const getById = async (req: Request, res: Response): Promise<void> => {
  const data = await ScalePost.findByPk(req.params.id);
  if (data) res.json(data);
  else res.status(404).json({ error: "Posto de escala não encontrado" });
};

export const updateOne = async (req: Request, res: Response): Promise<void> => {
  const { scaleId, personId, postId, date } = req.body;
  const [updated] = await ScalePost.update(
    { scaleId, personId, postId, date },
    { where: { id: req.params.id } }
  );
  if (updated) res.json({ success: true });
  else res.status(404).json({ error: "Posto de escala não encontrado" });
};

export const deleteOne = async (req: Request, res: Response): Promise<void> => {
  const deleted = await ScalePost.destroy({ where: { id: req.params.id } });
  if (deleted) res.json({ success: true });
  else res.status(404).json({ error: "Posto de escala não encontrado" });
};
