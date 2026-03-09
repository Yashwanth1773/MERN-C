const express=require('express')
const { getUsers, getuserById, createUser, updateUser, deleteUser } = require('../controlers/userControler')

const userRouters=express.Router()

userRouters.get('/',getUsers)
userRouters.get('/:id',getuserById)
userRouters.post('/create',createUser)
userRouters.put('/update/:id',updateUser)
userRouters.delete('/delete/:id',deleteUser)

module.exports=userRouters;