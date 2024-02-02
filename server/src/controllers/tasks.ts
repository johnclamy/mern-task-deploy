import { RequestHandler } from "express";
import TaskModel from "../models/task";

export const getTasks: RequestHandler = async (req, res, next) => {
  try {
    const tasks = await TaskModel.find().exec();
    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
};
