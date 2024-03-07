import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './Router/AppRouter'
import { DominoApp } from './DominoApp'
import { AppTheme } from './theme/AppTheme'
//import App from './App.tsx'
import { UserProvider } from './contexts/UserProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <AppTheme>
        <DominoApp/>
      </AppTheme>
    </UserProvider>
  </React.StrictMode>,
)
