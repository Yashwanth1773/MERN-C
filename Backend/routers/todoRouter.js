const express=require('express')
const { createtodo, gettodo, updatetodo, deletetodo } = require('../controlers/todoControler')

const todoRouters=express.Router()

todoRouters.post('/create',createtodo)
todoRouters.get('/',gettodo)
todoRouters.put('/update/:id',updatetodo)
todoRouters.delete('/delete/:id',deletetodo)

module.exports=todoRouters