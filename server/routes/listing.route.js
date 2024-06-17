import express from "express";
import * as listingController from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, listingController.createListing);
router.delete("/delete/:id", verifyToken, listingController.deleteListing);
router.post("/update/:id", verifyToken, listingController.updateListing);

export default router;
