import {Router} from 'express'
const router = Router();


import { createContent, getAllContent,getSingleContent, updateContent } from '../controllers/contentController.js';

router.get('/get-all-content',getAllContent)

router.get('/get-single-content',getSingleContent)

router.get('/update-content',updateContent)

router.post('/create-new', createContent)



export default router