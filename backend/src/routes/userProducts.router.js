import { Router } from "express";
import {
  addUserProduct,
  deleteUserProduct,
  getAllUserProducts,
  getUserProductsDetails
} from "../controllers/userProduct.controller.js";

const router = Router();
router.post("/", addUserProduct);
router.get("/", getAllUserProducts);
router.get("/request", getUserProductsDetails);
export default router;
