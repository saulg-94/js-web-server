import {Router} from 'express'
const router = Router();

import { getCurrentUser,updateUser,getApplicationStats } from '../controllers/userController.js';


router.get('/current-user',getCurrentUser)

router.get('/admin/app-stats',getApplicationStats)

router.get('/update-user',updateUser)



export default router