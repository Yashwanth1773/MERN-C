const Auth=require('../models/auth')
const bcrypt=require('bcryptjs')
exports.register=async(req,res)=>{
   try{

     const {name,email,password}=req.body
    const exist=await Auth.findOne({email})
    if(exist){
        res.status(400).json({message:"user already exist"})
    }
    const hashedPassword=await bcrypt.hash(password,10)
    const user=await Auth.create({
        name,
        email,
       password:hashedPassword
    })
    res.status(201).json({message:"user created sucessfully",user})
   }catch(err){
    res.status(500).send(err)
   }
}
exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await Auth.findOne({email})
        if(!user){
             return res.status(401).json({messahe:"user not found"})
        }
        const match=await bcrypt.compare(password,user.password)
        if(!match){
            return res.status(300).json({message:"invalid credentials"})
        }
        res.status(200).json({message:"login sucessfully",user})
    }catch(err){
        res.status(500).send(err)
    }

}