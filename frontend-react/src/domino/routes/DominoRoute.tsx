import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CreateGamePage, DominoPage, SearchGamePage } from '..'

export const DominoRoute = () => {

  return (
    <Routes>
        <Route path='main' element={<DominoPage/>}/>
        <Route path='search' element={<SearchGamePage/>}/>
        <Route path='create' element={<CreateGamePage/>}/>
    
        {/*Se manda por defecto al login*/}
        <Route path='/*' element={<Navigate to='/game/main'/>}/>  
    </Routes>
  )
}
