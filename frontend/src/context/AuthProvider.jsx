import React from 'react'
import Authcontext from './AuthContext'

const AuthProvider = ({children}) => {
    const user={
        id:1,name:"yash",email:"fahhhh@gmail.com"
    }
  return (
    <Authcontext.Provider value={user}>
        {children}
    </Authcontext.Provider>
  )
}

export default AuthProvider