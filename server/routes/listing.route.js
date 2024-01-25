import express from "express";
import * as listingController from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

console.log("in router");
router.post("/create", verifyToken, listingController.createListing);

export default router;
