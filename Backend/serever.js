const express =require('express')
const connectDB=require('./config/db')
const dotenv=require('dotenv')
const app=express()
const exRouters=require('./routers/egRouter')
const userRouters=require('./routers/userRouter')
const todoRouters=require('./routers/todoRouter')
const cors=require('cors')
const authrouters = require('./routers/authrouter')
dotenv.config()
connectDB()
app.use(cors())
app.use(express.json())
app.use(exRouters)
app.use('/api/user',userRouters)
app.use('/api/todo',todoRouters)
app.use('/api/auth',authrouters)


const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`Serever is running on http://localhost:${PORT}`)
})

module.exports=exRouters
