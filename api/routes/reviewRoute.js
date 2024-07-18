import express from 'express';
import { createReview, getReviews, deleteReview } from "../controllers/reviewController.js";
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router()

router.post("/createReview", verifyToken, createReview)
router.get("/:recipeId", getReviews)
router.delete("/:id", verifyToken, deleteReview)

export default router;