const Todo=require('../models/todo')
exports.createtodo=async (req,res)=>{
    try{
    const {task}=req.body
    const todo=await Todo.create({task})
    res.status(202).json(todo)
}catch(err){
    res.status(500).send(err)
}
}

exports.gettodo=async (req,res)=>{
    try{
        const todos=await Todo.find()
        res.status(201).json(todos)

    }
    catch(err){
        res.status(500).send(err)
    }
}
exports.updatetodo=async(req,res)=>{
    try{
        const todo=await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!todo){
            return res.status(404).json({message:"todo not found"})
        }
        res.status(200).json(todo)
    }
    catch(err){
        res.status(500).send(err)
    }
}
exports.deletetodo=async(req,res)=>{
   try{
        const todo=await Todo.findByIdAndDelete(req.params.id)
        if(!todo){
            res.status(404).json({message:"todo not exist"})
        }
        res.status(200).json({message:"Todo deleted sucessfully"})
    }
    catch(err){
        res.status(500).send(err)
    }
}

