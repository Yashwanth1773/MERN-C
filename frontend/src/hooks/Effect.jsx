import React, { useEffect } from 'react'
import { useState } from 'react'

const Effect = () => {
    const [count,setCount]=useState(0)
    const [value,setValue]=useState(0)
    //syntaxx
    // useEffect(callback function,[dependecy array])
    // useEffect(()=>{

    // },[dependecy array])
    //without dependence
  // useEffect(()=>{
  //       console.log("Useeffect mounted")
  //   },[])
    //with dependence
    useEffect(()=>{
        console.log("Useeffect mounted")
    },[count])
    const handleI=()=>{
      setCount((count)=>count+1)
      setCount((count)=>count+1)
      setCount((count)=>count+1)
    }
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={handleI}> Inc</button>
        <h1>Value:{value}</h1>
        <button onClick={()=>setValue(value+1)}>+
        </button>
    
    </div>
  )
}

export default Effect