

import './App.css'
import SignIn from './pages/Signin'
import Homepage from './pages/HomePage'
import SignUp from "./pages/Signup"
import ProtectedRoute from './Component/ProtexctedRoute'

import { BrowserRouter as Router, Routes, Route } from 'react-router'


function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Homepage /></ProtectedRoute>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </>
   

    
  )
}

export default App
