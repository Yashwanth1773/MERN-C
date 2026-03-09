const express =require('express')
const connectDB=require('./config/db')
const dotenv=require('dotenv')
const app=express()
const exRouters=require('./routers/egRouter')
const userRouters=require('./routers/userRouter')
dotenv.config()
connectDB()
app.use(express.json())
app.use(exRouters)
app.use('/api/user',userRouters)



const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`Serever is running on http://localhost:${PORT}`)
})

module.exports=exRouters
