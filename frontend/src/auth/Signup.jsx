import React, { useState } from 'react'

const Signup = () => {
    const [user,setuser]=useState({
        email:"",
        password:""
    })
    const handleLogin=(e)=>{
        e.preventDefault()
        console.log(user)
    }
    const handleChange=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <form onChange={handleLogin}>
            <label>user email:</label>
            <input type="text"
            onChange={handleChange}
            name='email'
            placeholder='enter email' />
            <br />
            <label>password:</label>
            <input type="password"
            onChange={handleChange}
            name='password'
            placeholder='enter password' />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Signup