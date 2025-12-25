import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";

const app = express();
const ROOT_DIR = path.resolve();

// API routes
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.get("/books", (req, res) => {
  res.status(200).json({ message: "this is the books endpoint" });
});

// Serve frontend (SPA)
const frontendPath = path.join(ROOT_DIR, "frontend", "dist");

app.use(express.static(frontendPath));

app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = ENV.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
