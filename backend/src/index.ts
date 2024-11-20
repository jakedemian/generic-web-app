import express from "express";
import bodyParser from "body-parser";
import testRouter from "./routes/test";
import { initializeDB } from "./infrastructure/db";
import cors from "cors";

const app = express();
const port = 5000;

// Initialize Database
initializeDB();

app.use(bodyParser.json());
app.use(cors());

app.use("/test", testRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
