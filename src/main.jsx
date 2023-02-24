import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ProyectosProvider } from './context/ProyectosProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProyectosProvider>
      <App />
    </ProyectosProvider>
  </React.StrictMode>,
)
