import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";
import { fileURLToPath } from "url";
import { connectDB } from "./lib/db.js";
import { serve } from "inngest/express";
import cors from "cors";
import { inngest, functions } from "./lib/inngest.js";
import clerkWebhook from "./routes/clerkWebhook.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//middleware
// app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/webhooks", clerkWebhook);
app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});
app.get("/books", (req, res) => {
  res.status(200).json({ message: "this is the books endpoint" });
});

// if (ENV.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));
//   app.get(/.*/, (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../../frontend/dist/index.html"));
//   });
// }

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("Server is listening on port", ENV.PORT);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};
startServer();
export default app;
