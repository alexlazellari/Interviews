import { Request, Response } from "express";
import { Todo, PrismaClient } from "@prisma/client";

const todoClient = new PrismaClient().todo;

export const getAllTodos = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allTodos: Todo[] = await todoClient.findMany();

    res.status(200).json({ data: allTodos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getTodoById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const todoId = req.params.id;
    const todo = await todoClient.findUnique({ where: { id: todoId } });

    res.status(200).json({ data: todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const createTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const todoData = req.body;
    const todo = await todoClient.create({
      data: { ...todoData },
    });

    res.status(201).json({ data: todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const todoId = req.params.id;
    const todoData = req.body;
    const updatedTodoData = await todoClient.update({
      where: { id: todoId },
      data: { ...todoData },
    });

    res.status(200).json({ data: updatedTodoData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const todoId = req.params.id;
    const todoData = await todoClient.delete({ where: { id: todoId } });

    res.status(200).json({ data: {} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
