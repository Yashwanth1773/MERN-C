const express=require('express');
const { register, login } = require('../controlers/authControler');

const authrouters=express.Router();

authrouters.post('/signup',register);
authrouters.post('/login',login);

module.exports=authrouters;