import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { getUser, editprofile, getUserRecipes } from '../controllers/userController.js';
const router = express.Router();

router.get('/:id', verifyToken, getUser)
router.put('/editprofile/:id', verifyToken, editprofile)
router.get('/myrecipes', verifyToken, getUserRecipes)


export default router;