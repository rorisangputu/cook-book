import express from 'express';
import { deleteUser, login, logout, register } from '../controllers/authController.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.delete('/deleteuser/:id', verifyToken, deleteUser)

export default router;