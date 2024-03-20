import { Router } from "express";
import { addProduct, getAllProducts, deleteProducts, editProducts } from "../controllers/products.controller.js";

const router = Router();
router.post("/", addProduct);
router.get("/", getAllProducts);
router.delete("/:id", deleteProducts);
router.put("/:id", editProducts);
export default router;
