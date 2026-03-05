import React, { useReducer, useState } from 'react'

const initialvalue={count:0}
const reducer=(state,action)=>{
    switch(action.type){
        case "increment":{
            return {count:state.count+1}
        }
        case "decrement":{
            return {count:state.count-1}
        }
        case "reset":{
            return initialvalue
        }
        default:{
            return state
        }
    }
}
const Reducer = () => {
   const [state,dispatch]=useReducer(reducer,initialvalue)

  return (
    <div>
        <h1>Count:{state.count}</h1>
        <button onClick={()=>dispatch({type:"decrement"})}>💔</button>
        <button onClick={()=>dispatch({type:"reset"})}>🔄️</button>
        <button onClick={()=>dispatch({type:"increment"})}>❤️</button>
    </div>
  )
}

export default Reducer