
import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  const [count, setCount] = useState(0)
  const like = useRef(0)
  const inputRef=useRef(null)

//ex1
//   useEffect(() => {
//     console.log("Component re-rendered");
//   })

//   const handleLike = () => {
//     like.current = like.current + 1
// }

//ex2
//  useEffect(() => {
//     like.current=like.current+1
//     console.log("component re-rended")
//   })
  
    const handleClick=()=>{
        inputRef.current.focus()
        inputRef.current.style.color="blue"
    }


  return (
    <div>
        {/* ex1 */}
      {/* <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>inc</button>

      <h1>Like: {like.current}</h1>
      <button onClick={handleLike}>❤️</button> */}
      {/* ex2 */}
      {/* <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>inc</button>
      <h1>Like: {like.current}</h1> */}
      {/* Ex3 */}
      <input type="text" ref={inputRef}/>
      <button onClick={handleClick}>Focus</button>
    </div>
  )
}

export default Ref;