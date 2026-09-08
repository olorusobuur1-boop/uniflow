// import React from 'react'
import { Link } from "react-router-dom"

const Loginpage = () => {
  return (
    <>
      <div className="login-container">
        <form action="">
            <h3>Sign In</h3>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <a href="">Forgot password?</a>
            <button className="btn">Login</button>
            <p>Don't have an account yet?,<Link to="/">Sign up here</Link></p>
        </form>
      </div>
    </>
  )
}

export default Loginpage
