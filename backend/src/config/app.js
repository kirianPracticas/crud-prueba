import express from "express";
import cors from "cors";
import path from "path";
import * as url from 'url'
import productRouter from "../routes/products.routes.js";
const app = express();

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

let corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/products", productRouter);
export default app;
