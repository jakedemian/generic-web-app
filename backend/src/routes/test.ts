import express from "express";

export default (service: any) => {
  const router = express.Router();

  router.get("/", async (req, res) => {
    try {
      const message = await service.fetchMessage();
      res.json({ message: message || "No message found" });
    } catch (error) {
      console.error("Error fetching message:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return router;
};
