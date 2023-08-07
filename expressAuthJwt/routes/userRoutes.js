
import express from 'express';

const router = express.Router()

import UserController from '../controllers/userController.js';

import checkUserAuth from '../middlewares/auth-middleware.js';


// Route level Middleware - To protect Route

router.use('/changepassword',checkUserAuth)

router.use('/loggeduser',checkUserAuth)

// public Routes(Before Login)

router.post('/register',UserController.userRegistration)

router.post('/login',UserController.userLogin)

router.post('/send-reset-password-email',UserController.sendUserPasswordResetEmail)

// Protected Routes(After login)

router.post('/changepassword',UserController.changeUserPassword)

router.post('/send-reset-password-email', UserController.sendUserPasswordResetEmail)

router.post('/reset-password/:id/:token', UserController.userPasswordReset)



export default router