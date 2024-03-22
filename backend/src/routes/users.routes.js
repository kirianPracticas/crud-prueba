import { Router } from "express";
import { addUser, singin } from "../controllers/users.controllers.js";

const router = Router();
router.post("/", addUser);
router.post("/login", singin);
export default router;
