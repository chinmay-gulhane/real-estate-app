import express from "express";
import * as userController from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", userController.test);
router.put("/update/:id", verifyToken, userController.updateUser);
router.delete("/delete/:id", verifyToken, userController.deleteUser);

export default router;
