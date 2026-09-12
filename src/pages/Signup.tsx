import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <div className="form-container">   
        <form action="">
            <h3>Create Account</h3>
            <div className="col2">
            <input type="text" placeholder='Surname' />
            <input type="text" placeholder='First Name' />
            
            </div>
            <input type="email" placeholder='Email' />
            <input type="password" name="" id="" placeholder='Password'/>
            <input type="password" name="" id="" placeholder='Confirm Password'/>
            <Link to="/login" style={{
              width:"100%"
            }}>
            <button className="btn">Create Account</button>
            </Link>
            <p>Already have an account?,<Link to="/login"> Log In here</Link></p>
        </form>
    </div>
    </>
  )
}

export default Signup
