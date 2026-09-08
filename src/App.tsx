import './App.css'
import { Route, Routes } from "react-router-dom"
import Landingpage from "./pages/Landingpage"
import Loginpage from './pages/Loginpage'

function App() {
  return(
    <Routes>
    <Route path="/" element={<Landingpage/>}/>
    <Route path="/login" element={<Loginpage/>}/>
  </Routes>
  )
}

export default App
