import DashboardIcon from '@mui/icons-material/Dashboard';
import CalculateIcon from '@mui/icons-material/Calculate';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Aside = () => {
  return (
    <div>
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
  )
}

export default Aside
