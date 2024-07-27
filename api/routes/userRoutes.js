import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { getUser, editprofile, getUserRecipes } from '../controllers/userController.js';
const router = express.Router();

router.get('/:id', verifyToken, getUser)
router.put('/:id/editprofile', verifyToken, editprofile)
router.get('/:id/myrecipes', verifyToken, getUserRecipes)



export default router;