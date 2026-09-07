// import React from 'react'
import {useState} from 'react'
import logo from "../assets/images/uniflow-logo.png"
import MenuIcon from '@mui/icons-material/Menu';

import "./Navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglemenu=()=>{
        setIsOpen(!isOpen)
    }
  return (
    <>
    <header>
        <div>
            <img src={logo} alt="" className='logo'/>
        </div>
        <div className="desktop-screen">
            <div>
                <nav>
                    <ul className='nav-ul'>
                        <li className="nav-li">Features</li>
                        <li className="nav-li">Pricing</li>
                        <li className="nav-li">Resources</li>
                    </ul>
                </nav>
            </div>
            <div>
                <a className='login-btn'>Log In</a>
                <a className='btn'>Sign Up Free</a>
            </div>
        </div>
            {/* menu icon */}
            <MenuIcon onClick={togglemenu} sx={{display:{
                xs:"block",
                md:"none"
            },
            cursor:"pointer",
            }}/>
            {isOpen && (
                <div className='container'>
                        <div>
                        <nav>
                            <ul className='small-screen-nav-ul'>
                                <li className='small-screen-nav-li'>Features</li>
                                <li className='small-screen-nav-li'>Pricing</li>
                                <li className='small-screen-nav-li'>Resources</li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <a className='login-btn'>Log In</a>
                        <a className="btn">Sign Up Free</a>
                    </div>
                </div>
                
            )}
    </header>
    </>
  )
}

export default Navbar
