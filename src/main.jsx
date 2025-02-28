import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { GoogleOAuthProvider } from '@react-oauth/google';
const googleKey = import.meta.env.VITE_CLIENT_KEY;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleKey}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
