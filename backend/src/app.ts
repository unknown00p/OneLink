import express from "express";
import type {Request,Response} from "express"

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req:Request, res:Response) => {
  res.json({ message: "Welcome to OneLink Backend!" });
});

app.get("/health", (req:Request, res:Response) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

export default app;
