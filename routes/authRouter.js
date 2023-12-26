import {Router} from 'express'
const router = Router();

import { login, logout, register } from '../controllers/authController.js';


router.get('/register',register)

router.get('/login',login)

router.get('/logout',logout)



export default router