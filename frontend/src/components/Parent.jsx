import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="Yash" age={20} isActive={true} food={["biryani","curd"]}
        contact={{mobno:98989898,
          email:"yaswanth@gmail.com"
        }}/>
        <Child name="chtan" age={10000} isActive={true} food={["biryani","curd"]}
        contact={{mobno:98276352,
          email:"chetan@gmail.com"
        }}/>
    </div>
  )
}

export default Parent