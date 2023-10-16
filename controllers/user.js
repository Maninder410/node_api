import { User } from "../models/user.js";

export const getAllUsers = async (req,res)=>{
    console.log(req.query);
   const users = await User.find({});
    res.send({
        success:true,
        users
    })
};
export const createUser = async (req,res)=>{
    const {name,email,password} = req.body;
     await User.create({
        name,
        email,
        password
    })
     res.status(201).json({
         success:true,
         message:"new user added"
     })
 };
 export const findUser = async (req,res)=>{
    //try to keep dynamic route at the bottom of the code
        
        const {id} = req.params;
        const user = await User.findById(id);
        res.json({
            success:true,
            user
        })
        
     };