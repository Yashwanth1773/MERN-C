
import React from 'react'
import Parent  from "./components/Parent"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
const App = () => {
 
  return (
    <> 
  <Navbar/> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    </>
  )
}

export default App