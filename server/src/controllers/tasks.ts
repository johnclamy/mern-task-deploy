import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";
import TaskModel from "../models/task";

export const getTasks: RequestHandler = async (req, res, next) => {
  try {
    const tasks = await TaskModel.find().exec();
    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
};

export const getTask: RequestHandler = async (req, res, next) => {
  const taskId = req.params.taskId;

  try {
    if (!isValidObjectId(taskId)) {
      throw createHttpError(400, "Invalid task id");
    }

    const task = await TaskModel.findById(taskId).exec();

    if (!task) {
      throw createHttpError(404, "Task not found");
    }

    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
};

type CreateTaskBody = {
  title?: string;
  text?: string;
};

export const createTask: RequestHandler<
  unknown,
  unknown,
  CreateTaskBody,
  unknown
> = async (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;

  try {
    if (!title) {
      throw createHttpError(400, "Task must have a title");
    }

    const newTask = await TaskModel.create({
      title,
      text,
    });

    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
};

type UpdateTaskBody = { title?: string; text?: string };
type UpdateTaskParams = { taskId: string };

export const updateTask: RequestHandler<
  UpdateTaskParams,
  unknown,
  UpdateTaskBody,
  unknown
> = async (req, res, next) => {
  const taskId = req.params.taskId;
  const updateTitle = req.body.title;
  const updateText = req.body.text;

  try {
    if (!isValidObjectId(taskId)) {
      throw createHttpError(400, "Invalid task id");
    }

    if (!updateTitle) {
      throw createHttpError(400, "Task must have a title");
    }

    const task = await TaskModel.findById(taskId).exec();

    if (!task) {
      throw createHttpError(404, "Task not found");
    }

    task.title = updateTitle;
    task.text = updateText;

    const updatedTask = await task.save();

    res.status(200).json(updatedTask);
  } catch (err) {
    next(err);
  }
};

export const deleteTask: RequestHandler = async (req, res, next) => {
  const taskId = req.params.taskId;

  try {
    if (!isValidObjectId(taskId)) {
      throw createHttpError(400, "Invalid task id");
    }

    const task = await TaskModel.findById(taskId).exec();

    if (!task) {
      throw createHttpError(404, "Task not found");
    }

    await task.remove();

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
