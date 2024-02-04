import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import tasksRoutes from "./routes/tasks";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/tasks", tasksRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: unknown, req: Request, res: Response, next: NextFunction): void => {
    console.error(err);
    let statusCode = 500;
    let errorMessage = "An unknown error occurred";

    if (isHttpError(err)) {
      statusCode = err.status;
      errorMessage = err.message;
    }

    res.status(statusCode).json({ err: errorMessage });
  }
);

export default app;
