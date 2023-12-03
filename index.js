import cors from "cors";
import express from "express";
import { products } from "./products";

// base url: https://back-quiz-17ma.vercel.app/

const app = express();
app.use(cors());

const port = process.env.PORT || 3334;
app.get("/", (req, res) => {
  return res.json(products);
});
app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});
