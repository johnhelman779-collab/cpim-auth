import cors from "cors";
import express from "express";
import authRoutes from "./routes/auth";

const app = express();
const port = Number(process.env.PORT ?? 3001);

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ service: "cpim-auth", status: "ok" });
});

app.use(authRoutes);

app.listen(port, () => {
  console.log(`cpim-auth listening on http://localhost:${port}`);
});
