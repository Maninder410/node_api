import express from "express";
import { createUser, findUser, getAllUsers } from "../controllers/user.js";
const router  = express.Router();


router.post("/new",createUser);
router.get("/all",getAllUsers);
router.get("/userid/:id",findUser);

export default router;