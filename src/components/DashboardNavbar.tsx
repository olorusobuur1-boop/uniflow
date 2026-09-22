import logo from "../assets/images/uniflow-logo.png"
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const DashboardNavbar = () => {
  return (
    <div>
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
            marginRight:"10px",
            cursor:"pointer"
          }}/>
          <AccountCircleIcon sx={{
            color:"gray",
            marginRight:"10px",
            cursor:"pointer"
          }}/>
          <button className='btn log-out-btn'>Log Out</button>
        </div>
      </nav>

    </div>
  )
}

export default DashboardNavbar
