import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { getUser, editprofile } from '../controllers/userController.js';
const router = express.Router();

router.get('/:id', verifyToken, getUser)
router.put('/editprofile', verifyToken, editprofile)


export default router;