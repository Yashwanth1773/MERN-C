import React from 'react'
import Parent from '../components/Parent'

const Contact = () => {
  const getmessage=(message)=>{
    console.log(message)
  }
  return (
    <div>
      <Parent message={getmessage}/>
    </div>
  )
}

export default Contact