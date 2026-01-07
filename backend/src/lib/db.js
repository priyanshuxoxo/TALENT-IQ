import mongoose from "mongoose";
import { ENV } from "./env.js";
export const connectDB = async () => {
  try {
    if (!ENV.DB_URL) {
      throw new Error("DB_URL is not defined in environment variables");
    }
    if (mongoose.connection.readyState >= 1) return;
    const conn = await mongoose.connect(ENV.DB_URL);
    console.log("Connected to mongoDb: ", conn.connection.host);
  } catch (error) {
    console.error(" Database connection error:", error);
    process.exit(1);
  }
};
