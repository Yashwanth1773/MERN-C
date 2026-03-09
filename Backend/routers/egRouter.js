const express=require('express')
const { getControler, postControler, putControler, deleteControler } = require('../controlers/exControler')

const exRouters=express.Router()

exRouters.get('/',getControler)
exRouters.post('/',postControler)
exRouters.put('/',putControler)
exRouters.delete('/',deleteControler)

module.exports=exRouters