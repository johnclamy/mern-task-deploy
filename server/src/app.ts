import "dotenv/config";
import express from "express";

const app = express();

// home page
app.get("/", (req, res) => res.send("Welcome to the home page"));

export default app;
