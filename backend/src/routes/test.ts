import express from "express";
import { getMessageRepository } from "../infrastructure/db";
import { MessageService } from "../application/MessageService";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const repository = getMessageRepository();
    const service = new MessageService(repository);
    const message = await service.getMessage();
    res.json({ message: message || "No message found" });
  } catch (error) {
    console.error("Error fetching message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
