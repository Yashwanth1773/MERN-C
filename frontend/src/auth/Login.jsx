import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [user,setuser]=useState({
        name:"",
        password:""
    })
    const handleLogin =(e)=>{
        e.preventDefault()
        console.log(user)
    }
    const handleChange=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <form onSubmit={handleLogin}>
            <label>username:</label>
            <input type="text" 
            name="name"
            placeholder='enter name'
            onChange={handleChange}/>
            <br />
            <br />
            <label>password:</label>
            <input type="password"
            name="password"
            placeholder='enter pass'
            onChange={handleChange} />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Login