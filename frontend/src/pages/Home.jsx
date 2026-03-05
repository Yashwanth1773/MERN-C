import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'
import Authcontext from '../context/AuthContext'
import LanguageContext from '../context/LanguageContext'
const Home = () => {
  const navigate=useNavigate()
  const {theme,changeTheme}=useContext(ThemeContext)
  const user=useContext(Authcontext)
  const {language,changeLanguage}=useContext(LanguageContext)
  const handleClick =()=>{
        navigate("/about")
  }
  const message={
    en:{
      gretting:"hello"
    },
    te:{
      gretting:"నమస్కారము"
    },
    hi:{
        gretting:"नमस्ते"
    },
    spa:{
        gretting:"hola"
    },
    gre:{
        gretting:"hallo"
    }

  }
  const text=message[language]
  return (
    <div>
      <button onClick={handleClick}>About</button>
        <h1>{theme}</h1>
        <button onClick={()=>changeTheme('dark')}>dark</button>
        <button onClick={()=>changeTheme('light')}>light</button>
        <h2>user details
        </h2>
        <p>Id:{user.id}</p>
        <p>name:{user.name}</p>
        <p>Email:{user.email}</p>
        <h1>{text.gretting}:Chetan</h1>
        <button onClick={()=>changeLanguage('en')}>English</button>
        <button onClick={()=>changeLanguage('te')}>Telugu</button>
        <button onClick={()=>changeLanguage('hi')}>Hindi</button> 
        <button onClick={()=>changeLanguage('spa')}>spanish</button>
        <button onClick={()=>changeLanguage('gre')}>german</button>
    </div>
  )
}

export default Home