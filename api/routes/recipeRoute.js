import express from 'express';
import { createRecipe, getRecipes } from '../controllers/recipeController.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();

router.post('/createRecipe', verifyToken, createRecipe)
router.get('/', getRecipes)

export default router;