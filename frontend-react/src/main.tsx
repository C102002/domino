import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './Router/AppRouter'
import { DominoApp } from './DominoApp'
import { AppTheme } from './theme/AppTheme'
//import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <AppTheme> */}
      <DominoApp/>
    {/* </AppTheme> */}
  </React.StrictMode>,
)
