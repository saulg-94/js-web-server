import {StatusCodes} from 'http-status-codes'
import ContentModel from '../models/ContentModel.js'



export const getAllContent = async(req,res)=>{
    res.json({msg:'content/get-all-content api router controller endpoint'})
}

export const getSingleContent = async(req,res)=>{
    res.json({msg:'content/get-single-content api router controller endpoint'})
}

export const updateContent = async(req,res)=>{
    res.json({msg:'content/update-content api router controller endpoint'})
}

export const createContent = async(req,res)=>{

    try {
        const newContent = await ContentModel.create(req.body);

    res.status(StatusCodes.CREATED).json({status: 'success', data: newContent})
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST).json({status: 'fail', msg: err})
    }

   
}