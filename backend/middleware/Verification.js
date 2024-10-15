import jwt from 'jsonwebtoken';
import CustomError from '../utils/CustomeError.js';

export const protect = async(req,res,next)=>{
    const authHeader = req.headers['authorization'];
    
    if(!authHeader.startsWith("Bearer")){
            return next(new CustomError("Invalid token",403))
    }
    const token = authHeader.split(" ")[1];

    jwt.verify(token,process.env.SCRETE_KEY,(err,user)=>{
        if(err){
            return next(err)
        }
        req.user = user;
        next();
    })
}