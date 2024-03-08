import React from 'react'
import ReactDOM from 'react-dom/client'
import { io } from 'socket.io-client'
import { CoreIO } from './socket/io.tsx'

const socket = io('https://learngit.up.railway.app/')
//const socket = io('http://localhost:3000', { auth: { token: 'ab-123', name: 'russa' }}) 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CoreIO prop={socket}/>
  </React.StrictMode>
)
