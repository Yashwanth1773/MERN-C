import React from 'react'
import Child from './Child'

const Parent = ({message}) => {
  return (
    <div>
      <button onClick={()=>message("Message from parent")}>send message</button>
        <Child name="Yash" age={20} isActive={true} food={["biryani","curd"]}
        contact={{mobno:98989898,
          email:"yaswanth@gmail.com"
        }}
        sendmessage={message}/>
        <Child name="chtan" age={10000} isActive={true} food={["biryani","curd"]}
        contact={{mobno:98276352,
          email:"chetan@gmail.com"
        }}
        sendmessage={message}/>
    </div>
  )
}

export default Parent