import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import tasksRoutes from "./routes/tasks";

const app = express();

app.use("/api/tasks", tasksRoutes);

app.use((req, res, next) => {
  next(Error("Endpoint not found"));
});

app.use(
  (err: unknown, req: Request, res: Response, next: NextFunction): void => {
    console.error(err);
    let statusCode = 500;
    let errorMessage = "An unknown error occurred";

    if (err instanceof Error) {
      errorMessage = err.message;
    }

    res.status(statusCode).json({ err: errorMessage });
  }
);

export default app;
