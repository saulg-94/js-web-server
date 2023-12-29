import {StatusCodes} from 'http-status-codes'





export const getCurrentUser = async(req,res)=>{
    res.json({msg:'users/current-user api router controller endpoint'})
}

export const getApplicationStats = async(req,res)=>{
    res.json({msg:'user/app-stats api router controller endpoint'})
}

export const updateUser = async(req,res)=>{
    res.json({msg:'user/update-user api router controller endpoint'})
}