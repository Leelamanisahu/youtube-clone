import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import CustomError from "../utils/CustomeError.js";



const generateToken = (id, expiresIn) => {
    return jwt.sign({ id }, process.env.SCRETE_KEY, {
        expiresIn
    });
};


export const register = async (req,res,next)=>{
    try {
        const {username,email,password,} = req.body;
        const isExist = await User.findOne({email});
        if(isExist){
            const error =new CustomError("User Already exist", 409)
            return next(error);
        }
        const hashPassword = bcrypt.hashSync(password,10);
        const user = new User({
            username,email,password:hashPassword
        })
        const token = generateToken(user._id,'10h');

        await user.save();
        return res.status(200).json({user,token});
    } catch (error) {
        next(error);
    }
}


export const login = async(req,res,next)=>{
    try {
        const {email,password} = req.body;
        const isValid = await User.findOne({email});
        if(!isValid){
            return next(new CustomError("User not found",404));
        }
        const isPassCorrect = bcrypt.compareSync(password,isValid.password);
        if(!isPassCorrect){
            return next(new CustomError("Wrong credential",401))
        }
        const token = generateToken(isValid._id,'10h');
        return res.status(200).json({user:isValid,token});
    } catch (error) {
        next(error);
    }
}


export const getDetails = async(req,res,next)=>{
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

