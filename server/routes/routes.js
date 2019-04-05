import express from 'express';
import UsersController from '../controllers/users';
const router=express.Router();
router.get('/api/v1/auth/signup',UsersController.getALLusers);
export default router;