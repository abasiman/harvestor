import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { NextUIProvider } from "@nextui-org/react";
// import { PrimeReactProvider } from 'primereact/api';

createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </NextUIProvider>
)