// import React from 'react'
import logo from "../assets/images/uniflow-logo.png"
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalculateIcon from '@mui/icons-material/Calculate';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const Dashboard = () => {
  return (
    <>
      <div style={{
        position:"relative"
      }}>
        
      <nav style={{
        padding:"10px",
        justifyContent:"space-between",
        display:"flex",
        alignItems:"center"
      }}>
        <img src={logo} alt="" style={{
          maxWidth:"100px"
        }}/>
        <div style={{
          display:"flex",
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"center"
        }}>
          <NotificationsIcon sx={{
            color:"gray",
            marginRight:"10px"
          }}/>
          <AccountCircleIcon sx={{
            color:"gray",
            marginRight:"10px"
          }}/>
          <button className='btn log-out-btn'>Log Out</button>
        </div>
      </nav>

      {/* Aside */}
      <aside>
        <ul>
          <li><DashboardIcon/>Dashboard</li>
          <li><CalculateIcon/>CGPA Calculator</li>
          <li><SchoolIcon/>Academics</li>
          <li><CalendarMonthIcon/>TimeTable</li>
          <li><AccountCircleIcon/>Profile</li>
        </ul>
      </aside>

      </div>
    </>
  )
}

export default Dashboard
