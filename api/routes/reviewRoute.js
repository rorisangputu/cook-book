import express from 'express';
import { createReview, deleteReview } from "../controllers/reviewController.js";
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router()

router.post("/createReview", verifyToken, createReview)

router.delete("/:id", verifyToken, deleteReview)

export default router;