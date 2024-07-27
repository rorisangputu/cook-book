import express from 'express';
import {
    createRecipe, getRecipe, getRecipes,
    getPopularRecipes, editRecipe, deleteRecipe
} from '../controllers/recipeController.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();

router.post('/createRecipe', verifyToken, createRecipe)
router.get('/', getRecipes)
router.get('/popularRecipes', getPopularRecipes)
router.get('/recipe/:id', getRecipe)
router.put('/editrecipe/:id', verifyToken, editRecipe)
router.delete('/deleterecipe/:id', verifyToken, deleteRecipe)

export default router;