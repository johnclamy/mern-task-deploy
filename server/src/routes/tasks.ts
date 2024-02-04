import express from "express";
import * as TasksController from "../controllers/tasks";

const router = express.Router();

router.get("/", TasksController.getTasks);
router.get("/:taskId", TasksController.getTask);
router.post("/", TasksController.createTask);
router.patch("/:taskId", TasksController.updateTask);

export default router;
