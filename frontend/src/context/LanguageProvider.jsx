import React, { useState } from 'react'
import Languagecontext from './LanguageContext'

const LanguageProvider = ({children}) => {
    const [language,setLanguage]=useState('en')
    const changeLanguage=(lang)=>{
        setLanguage(lang)
    }
  return (
    <Languagecontext.Provider value={{language,changeLanguage}}>
        {children}
    </Languagecontext.Provider>
  )
}

export default LanguageProvider