import React from 'react'

const Child = ({name,age,isActive}) => {
  return (
    <div>
        <h1>Name:{name} </h1>
        <h2>Age:{age} </h2>  
        <h3>Isactive:{isActive? "Active":"Not Active"}</h3>   
    </div>
  )
}

export default Child