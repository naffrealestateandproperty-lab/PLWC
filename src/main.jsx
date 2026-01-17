import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ToastContainer} from "react-toastify"
import CartProvider from "./Context/CartContext.jsx"
import { AuthProvider } from './Context/AuthContext.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <CartProvider>
    <App />
    <ToastContainer />
    </CartProvider>
   </AuthProvider>
  </StrictMode>,
)
