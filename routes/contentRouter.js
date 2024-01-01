import {Router} from 'express'
const router = Router();


import { aliasTopContent, createContent, deleteContent, getAllContent,getContentStats,getSingleContent, updateContent } from '../controllers/contentController.js';

router.route('/top-cheap').get( aliasTopContent ,getAllContent)

router.route('/content-stats').get(getContentStats)

router.get('/get-all-content',getAllContent)

router.get('/get-single-content/:id',getSingleContent)

router.patch('/update-content/:id',updateContent)

router.post('/create-new', createContent)

router.delete('/delete-content/:id', deleteContent)



export default router