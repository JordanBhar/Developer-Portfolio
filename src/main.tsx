import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// @ts-ignore: CSS module declarations are handled by the build tool
import './styles/globals.css'
// @ts-ignore: CSS module declarations are handled by the build tool
import './styles/animations.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
