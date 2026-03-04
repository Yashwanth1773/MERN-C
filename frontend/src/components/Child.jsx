import React from 'react'

const Child = ({name,age,isActive,food,contact}) => {
  return (
    <div>
        <h1>Name:{name} </h1>
        <h2>Age:{age} </h2>  
        <h3>Isactive:{isActive? "Active":"Not Active"}</h3>  
        <h1>Fav Food</h1>
        <br />
        <hr />
        <ul>
          {food.map((value,index)=>(
            <li key={index}>{value}</li>
          ))}
          </ul> 
          <br />
          <hr />
          <h1>contact details</h1>
          <p>mobno:{contact.mobno}</p>
          <p>email:{contact.email}</p>
          <br />
          <hr />
    </div>
  )
}

export default Child