import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [count,setCount]=useState(0)
    const [number,setNumber]=useState(0)
    const cube=(num)=>{
        console.log("done")
        return Math.pow(number,3)
    }
    const result=useMemo(()=>{
        return cube(number)

    },[number])
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>count++</button>
        <h1>Cube:{result}</h1>
        <input type="number" onChange={(e)=>setNumber(e.target.value)} />

    </div>
  )
}

export default Memo