import {StatusCodes} from 'http-status-codes'

import User from '../models/UserModel.js'

export const register = async(req,res)=>{
//     const user = await User.create(req.body);
//     console.log(user);
  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
}

export const login = async(req,res)=>{
    res.json({msg:'auth/login api router controller endpoint'})
}

export const logout = async(req,res)=>{
    res.json({msg:'auth/logout api router controller endpoint'})
}