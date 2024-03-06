import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '..'

export const AuthRoute = () => {
  return (
    <Routes>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
        
        {/*Se manda por defecto al login*/}
        <Route path='/*' element={<Navigate to='/auth/login'/>}/>  
    </Routes>
  )
}
