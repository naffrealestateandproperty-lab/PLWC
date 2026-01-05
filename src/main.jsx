import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ToastContainer} from "react-toastify"
import CartProvider from "./Context/CartContext.jsx"





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <App />
    <ToastContainer />
    </CartProvider>
  </StrictMode>,
)
