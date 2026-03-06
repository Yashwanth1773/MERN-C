import React, { useState } from 'react'

const Todo = () => {
    const [task,setTask]=useState('')
    const[todos,setTodos]=useState([{
        task:'Read',
        status:false
    }])
    const [edit,setEdit]=useState(null)
    const handleaddoredit=()=>{
       
        if(edit ||edit===0){
            setTodos(todos.map((todo,index)=>(
                index===edit?{...todo,task:task}:todo
            )))
            setEdit(null)

        }
        else{
            setTodos([...todos,{
                task:task,
                status:false
            }])
        }
        setTask('')

    }
    const handledelete=(index)=>{
        setTodos(todos.filter((_,i)=>index!=i))
    }
    const handletogglestatus=(index)=>{
        setTodos(todos.map((todo,i)=>index===i?{...todo,status:!todo.status}:todo))
    }


  return (
    <div>
        <h1>Todo</h1>
        <label>Task</label>
        <input type="text"placeholder='enter the task' 
        value={task}
        onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleaddoredit}>{edit||edit==0?"update":"Add"}</button>
        <br /><br />
        <ul>
            {todos.map((todo,index)=>(
                <li key={index}>
                    <span style={{cursor:"pointer",textDecoration:todo.status?"line-through":"none"}}
                    onClick={()=>handletogglestatus(index)}>{todo.task}</span>
                    <button onClick={()=>{
                        setTask(todo.task)
                        setEdit(index)
                    }}>✏️</button>
                    <button onClick={()=>handledelete(index)}>💀</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo