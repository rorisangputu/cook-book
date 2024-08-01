import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { getUser, editprofile, getUserRecipes } from '../controllers/userController.js';
const router = express.Router();

router.get('/:id', verifyToken, getUser)
router.put('/:id/editprofile', editprofile)
router.get('/:id/myrecipes', getUserRecipes)



export default router;