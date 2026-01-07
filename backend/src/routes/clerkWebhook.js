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
    const webhookSecret = ENV.CLERK_WEBHOOK_SECRET;

    if (!webhookSecret) {
      return res.status(500).send("Webhook secret not configured");
    }

    const headers = req.headers;
    const payload = req.body;

    let event;

    try {
      const wh = new Webhook(webhookSecret);
      event = wh.verify(payload, headers);
    } catch (err) {
      console.error("❌ Webhook verification failed:", err.message);
      return res.status(400).send("Invalid signature");
    }

    await connectDB();

    // ✅ Handle events
    if (event.type === "user.created") {
      const { id, email_addresses, first_name, last_name, image_url } =
        event.data;

      await User.create({
        clerkId: id,
        email: email_addresses[0]?.email_address || "",
        name: `${first_name || ""} ${last_name || ""}`,
        profileImage: image_url,
      });
    }

    if (event.type === "user.deleted") {
      await User.deleteOne({ clerkId: event.data.id });
    }

    res.status(200).json({ success: true });
  }
);

export default router;
