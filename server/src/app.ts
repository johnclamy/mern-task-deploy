import "dotenv/config";
import express from "express";
import TaskModel from "./models/task";

const app = express();

// home page
app.get("/", async (req, res) => {
  const tasks = await TaskModel.find().exec();
  res.status(200).json(tasks);
});

export default app;
