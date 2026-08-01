import User from '../models/User.js'
import bcrypt from 'bcrypt'
import generateToken from '../utils/generateToken.js';

export const register = async(req,res)=>{
    try{
        const {username,email,password} = req.body;
        if(!username || !email || !password){
            return res.status(400).json({
                success:false,
                message:"username,email and password is required"
            })
        }

        if(password.length < 6){
            return res.status(400).json({
                success:false,
                message:"password must be at 6 characters."
            })
        }

        const existingUser = await User.findOne({
            $or:[{email},{username}]
        })

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User allready exist with this username or password"
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const user = await User.create({
            username,
            email,
            password:hashedPassword
        })

        const token = generateToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            sameSite: "None",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(201).json({
            success:true,
            message:"Registration Successfull.",
            token,
            user:{
                id:user._id,
                username:user.username,
                email:user.email,
            }
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"server error"
        })
    }
}

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Email and password is required"
            })
        }

        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({
                success:false,
                message:"Invalid email or password"
            })
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:"Invalid email or password"
            })
        }
        const token = generateToken(user._id)

        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            sameSite: "None",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            success:true,
            messgae:"Login successful.",
            token,
            user:{
                id:user._id,
                username:user.username,
                email:user.email,
            }
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"server error"
        })
    }
}
export const logout = async(req,res)=>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            success:false,
            message:"token not found, cannot logout "
        })
    }
    res.clearCookie("token")
    return res.status(200).json({
        success:true,
        message:"user logout succssfully."
    })
}
export const getCurrentUser = async(req,res)=>{
    res.status(200).json({
        success:true,
        user:req.user
    })
}