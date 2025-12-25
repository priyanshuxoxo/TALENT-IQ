import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";

const app = express();
const __dirname = path.resolve();
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});
app.get("/books", (req, res) => {
  res.status(200).json({ message: "this is the books endpoint" });
});

//make ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(ENV.PORT, () => {
  console.log(`Server is listening on port ${ENV.PORT}`);
});
export default app;
