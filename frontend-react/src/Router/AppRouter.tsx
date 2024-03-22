import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DominoPage } from '../domino'
import { AuthRoute } from '../auth';
import { DominoRoute } from '../domino/routes/DominoRoute';
import { UserContext } from '../contexts/UserContext';
import { Checking } from '../ui';

export const AppRouter = () => {
  const {user}=useContext(UserContext);
  const {status}=user;
  console.log(user);
  

  if(status==='checking'){
    return(<Checking/>)
  }

  return (
    <Routes>
        { 
          (status==='not-authenticated')
          ? <Route path='/auth/*' element={<AuthRoute/>}/>
          : <Route path='/*' element={<DominoRoute/>}/>
        }
        <Route path='/*' element={<Navigate to='/auth/login'/>}/>
      
    </Routes>
  )
}
