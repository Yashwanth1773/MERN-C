const mongoose=require('mongoose')

const todoschema=new mongoose.Schema({
    task:{type:String,required:true},
    completed:{type:Boolean,default:false}
})

module.exports=mongoose.model('todo',todoschema)