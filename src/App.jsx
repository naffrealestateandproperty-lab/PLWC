

import './App.css'
import SignIn from './pages/Signin'
import Homepage from './pages/HomePage'
import SignUp from "./pages/Signup"

import { BrowserRouter as Router, Routes, Route } from 'react-router'


function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </Router>
    </>
   

    
  )
}

export default App
