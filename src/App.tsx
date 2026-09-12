import './App.css'
import { Route, Routes } from "react-router-dom"
import Landingpage from "./pages/Landingpage"
import Loginpage from './pages/Loginpage'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'

function App() {
  return(
    <Routes>
    <Route path="/" element={<Landingpage/>}/>
    <Route path="/login" element={<Loginpage/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
  </Routes>
  )
}

export default App
