import express from "express";
import { getPool } from "../infrastructure/db";
import { createTestRepository } from "../infrastructure/test.repo";
import { createTestService } from "../application/TestService";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pool = getPool();
    const repository = createTestRepository(pool);
    const service = createTestService(repository);
    const message = await service.fetchMessage();
    res.json({ message: message || "No message found" });
  } catch (error) {
    console.error("Error fetching message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
