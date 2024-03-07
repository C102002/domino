import { useState } from 'react'
import React from 'react'
import { AppRouter } from './Router'
import { BrowserRouter } from 'react-router-dom'

export const DominoApp=()=> {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}