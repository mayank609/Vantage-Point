import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactLenis } from 'lenis/react'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactLenis root options={{ lerp: 0.08, duration: 1.4, smoothWheel: true, wheelMultiplier: 0.9 }}>
      <App />
    </ReactLenis>
  </React.StrictMode>,
)
