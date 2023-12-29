import {StatusCodes} from 'http-status-codes'




export const getAllContent = async(req,res)=>{
    res.json({msg:'content/get-all-content api router controller endpoint'})
}

export const getSingleContent = async(req,res)=>{
    res.json({msg:'content/get-single-content api router controller endpoint'})
}

export const updateContent = async(req,res)=>{
    res.json({msg:'content/update-content api router controller endpoint'})
}