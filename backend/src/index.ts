import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { knex } from "./infrastructure/db";
import { createTestRepository } from "./infrastructure/test.repo";
import { createTestService } from "./application/TestService";
import testRouter from "./routes/test";

const app = express();
const port = 5000;

const repository = createTestRepository(knex);
const service = createTestService(repository);

app.use(bodyParser.json());
app.use(cors());

app.use("/test", testRouter(service));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
