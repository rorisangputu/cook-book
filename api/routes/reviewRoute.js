import express from 'express';
import { createReview, deleteReview, getReviews } from "../controllers/reviewController.js";
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router()

router.post("/createReview", verifyToken, createReview)
router.get('/:id', getReviews)
router.delete("/deleteReview/:id", verifyToken, deleteReview)

export default router;