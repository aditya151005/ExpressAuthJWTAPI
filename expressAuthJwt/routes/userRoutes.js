
import express from 'express';

const router = express.Router()

import UserController from '../controllers/userController.js';

// public Routes(Before Login)

router.post('/register',UserController.userRegistration)

router.post('/login',UserController.userLogin)

// Protected Routes(After login)

export default router