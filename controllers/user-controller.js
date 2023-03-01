import user from "../models/user.js";
import bcrypt from "bcryptjs";

export const getAllUser = async (req,res,next) =>
{
    let Users;
    try {
        Users = await user.find();
    } catch (error) {
        
        console.log(error);
    }
    if(!Users)
    {
        return res.status(404).json({message:"user not found"})
    }
    return res.status(200).json({Users})
};
export const signup = async (req,res,next)=>
{   
    console.log(req.body);
    const {name,email,password} = req.body;
    let existingUser;
    try {
        existingUser =await user.findOne({email});
    } catch (error) {
        console.log(error).json({message:"Invalid request!!"});
    }
    if(existingUser)
    {
        return res.status(400).json({message:"Your already exists"});
    }
    const hashPassword = bcrypt.hashSync(password);
    const User = new user({
        name,
        email,
        password:hashPassword,
    });
    try {
        await User.save();
    } catch (error) {
        console.log(error);
    }
   return  res.status(201).json({User})
};
export const login = async(req,res,next)=>
{   console.log(req.body);
    const { email,password}=req.body;
    let existingUser;
    try {
        existingUser =await user.findOne({email});
    } catch (error) {
        console.log(error).json({message:"Invalid request!!"});
    }
    if(!existingUser)
    {
        return res.status(404).json({message:"Could not find email by this password"});
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect)
    {
        return res.status(400).json({message:"un Authorized access"})
    }
    return res.status(200).json({message:"Login Successfull"});
}
