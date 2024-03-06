import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DominoPage } from '../domino'
import { AuthRoute } from '../auth';
import { DominoRoute } from '../domino/routes/DominoRoute';

export const AppRouter = () => {

  const authStatus='not-authenticated';

  return (
    <Routes>
        { 
          (authStatus==='not-authenticated')
          ? <Route path='/auth/*' element={<AuthRoute/>}/>
          : <Route path='/game/*' element={<DominoRoute/>}/>
        }
        <Route path='/*' element={<Navigate to='/auth/login'/>}/>
      
    </Routes>
  )
}
