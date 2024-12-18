import { Request, Response } from "express";
import User from "../models/user";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await User.findAll();
  res.json(users);
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const user = await User.findByPk(req.params.id);
  if (user) res.json(user);
  else res.status(404).json({ error: "Usuário não encontrado" });
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email } = req.body;
  const [updated] = await User.update(
    { name, email },
    { where: { id: req.params.id } }
  );
  if (updated) res.json({ success: true });
  else res.status(404).json({ error: "Usuário não encontrado" });
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const deleted = await User.destroy({ where: { id: req.params.id } });
  if (deleted) res.json({ success: true });
  else res.status(404).json({ error: "Usuário não encontrado" });
};
