import {Router} from 'express'
const router = Router();


import { createContent, getAllContent,getSingleContent, updateContent } from '../controllers/contentController.js';

router.get('/get-all-content',getAllContent)

router.get('/get-single-content/:id',getSingleContent)

router.patch('/update-content/:id',updateContent)

router.post('/create-new', createContent)



export default router