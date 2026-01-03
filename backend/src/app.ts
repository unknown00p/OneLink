import express from "express";
import type { Request, Response } from "express";
import { prisma } from "./db/db";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to OneLink Backend!" });
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Database connection test
app.get("/db-test", async (req: Request, res: Response) => {
  try {
    // Test database connection with a simple query
    await prisma.$queryRaw`SELECT 1 as test`;
    res.json({
      status: "Database connected successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error:any) {
    console.error("Database connection error:", error);
    res
      .status(500)
      .json({ error: "Database connection failed", details: error.message });
  }
});

export default app;
