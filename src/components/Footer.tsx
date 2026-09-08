// import React from 'react'
import uniflow from "../assets/images/uniflow-logo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="col2">
          <img src={uniflow} alt="" className='logo' />
          <select name="" id="">
            <option value="US english">English (US)</option>
            <option value="UK english">English (UK)</option>
            <option >French</option>
          </select>
        </div>
        
        <div className="col3">
          <ul>
            <p>Quick Links</p>
            <li>Home</li>
            <li>Feature</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>

          <ul>
            <p>Company</p>
            <li>About Us</li>
            <li>Career</li>
            <li>Legal</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>

          <ul>
            <p>Support</p>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>API Documentation</li>
          </ul>
        </div>
        <div className='email'>Contact: uniflow@gmail.com</div>
        <div className='email'><TwitterIcon/><LinkedInIcon/><FacebookIcon/></div>

        <hr />
        <p className='email'> 2026 uni-flow inc. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer
