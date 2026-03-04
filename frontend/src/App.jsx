
import React from 'react'
import Parent  from "./components/Parent"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import State from './hooks/State'
import Hooks from './hooks/Hooks'
import {Routes,Route} from 'react-router-dom'
import Form from './hooks/Form'
import Effect from './hooks/Effect'
import EffectWithApi from './hooks/EffectWithApi'
import Login from './auth/Login'
import Signup from './auth/Signup'
const App = () => {
 
  return (
    <> 
  <Navbar/> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      {/* Nested route */}
      <Route path='/Hooks' element={<Hooks/>}>
      <Route path='useState' element={<State/>}/>
      <Route path='form' element={<Form/>}/>
      <Route path='effect' element={<Effect/>}/>
      <Route path='effectwithapi' element={<EffectWithApi/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App