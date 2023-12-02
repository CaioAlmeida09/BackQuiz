import cors from "cors";
import express from "express";
import { products } from "./products";

const app = express();
app.use(cors());

const port = process.env.PORT || 3333;
app.get("/", (req, res) => {
  return res.json(products);
});
app.listen(3333, () => {
  console.log("servidor rodando");
});
