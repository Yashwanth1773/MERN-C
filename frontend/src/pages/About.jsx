import React from 'react'
import Parent from '../components/Parent'

const About = () => {
     const ele=<div>Hello world..</div>
  return (
    <div>
        <p>{ele}</p>
        <Parent/>
    </div>
  )
}

export default About