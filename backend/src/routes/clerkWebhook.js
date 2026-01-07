import express from "express";
import { Webhook } from "svix";
import User from "../models/User.js";
import { connectDB } from "../lib/db.js";
import { ENV } from "../lib/env.js";

const router = express.Router();

router.post(
  "/clerk",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    console.log("📩 Clerk webhook hit");

    const webhookSecret = ENV.CLERK_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error("❌ CLERK_WEBHOOK_SECRET missing");
      return res.status(500).send("Webhook secret not configured");
    }

    let event;

    try {
      const wh = new Webhook(webhookSecret);
      event = wh.verify(req.body, req.headers);
      console.log("✅ Webhook verified:", event.type);
    } catch (err) {
      console.error("❌ Webhook verification failed:", err.message);
      return res.status(400).send("Invalid signature");
    }

    await connectDB();

    if (event.type === "user.created") {
      console.log("👤 Creating user in DB");

      const { id, email_addresses, first_name, last_name, image_url } =
        event.data;

      await User.findOneAndUpdate(
        { clerkId: id },
        {
          clerkId: id,
          email: email_addresses[0]?.email_address || "",
          name: `${first_name || ""} ${last_name || ""}`,
          profileImage: image_url,
        },
        { upsert: true, new: true }
      );
    }

    if (event.type === "user.deleted") {
      console.log("🗑️ Deleting user from DB");
      await User.deleteOne({ clerkId: event.data.id });
    }

    res.status(200).json({ success: true });
  }
);
export default router;
