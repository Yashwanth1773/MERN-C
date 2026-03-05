import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import './Hooks.css'

const Hooks = () => {
  return (
    <div>
        <ul className='nestedlist'>
            <li><Link to="useState" className='nestedLink'>useState</Link></li>
            <li><Link to="form" className='nestedLink'>Form</Link></li>
            <li><Link to="effect" className='nestedLink'>Effect</Link></li>
            <li><Link to="effectwithapi" className='nestedLink'>EffectWithApi</Link></li>
            <li><Link to="ref" className='nestedLink'>Ref</Link></li>
            <li><Link to="reducer" className='nestedLink'>Reducer</Link></li>
        </ul>   
        
        <Outlet/>
    </div>
  )
}

export default Hooks