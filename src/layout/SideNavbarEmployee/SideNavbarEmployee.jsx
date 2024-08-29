import React from 'react'
import '../SideNavbarEmployee/SideNavbarEmployee.scss'
import { FaHome } from 'react-icons/fa'
import { FaBusinessTime, FaPeopleGroup } from 'react-icons/fa6'
import { GrSchedules } from 'react-icons/gr'
import { MdOutlinePayments } from 'react-icons/md'
import { CiLogout } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'
import { sassNull } from 'sass'

const SideNavbarEmployee = () => {
    const sideNavbarEmployeeLinks=[
        {
            icon:<FaHome/>,
            path:'/employee',
            linkContent:"Home"
        },

        {
            icon: <FaPeopleGroup/>,
            path:'/profile',
            linkContent:'Profile'
        },
        {
            icon: <FaBusinessTime/>,
            path:'/attendance-employee',
            linkContent:'Attendance'
        },
        // {
        //     icon: <FaBusinessTime/>,
        //     path:'/checkinout',
        //     linkContent:'Time in /Time Out'
        // },
        {
            icon: <MdOutlinePayments/>,
            path:'/payroll-employee',
            linkContent:'Payroll'
        },
        {
            icon: <CiLogout/>,
            path:'/logout',
            linkContent:'Log out'
            
        }

    ]
    const [userDetails, setUserDetails] = useLocalStorage('user');
    // const [token, setToken] = useLocalStorage('token');



    const handleLogout = () => {
        setUserDetails(null);
        setToken(null);
        navigate('/'); 
    }

    const navigate=useNavigate()


    const logOut=()=>{
        const token=localStorage.getItem("token")
       token? setToken('token'):''
        localStorage.removeItem('user')
        // setUserDetails(null)
        // 
        navigate('/')

    }
  return (
    
    <div className='sidenavbar-container'>
        <div>
            {sideNavbarEmployeeLinks && sideNavbarEmployeeLinks.map((item, index) => (
                item.path==='/logout'?(
                    <NavLink
                    className='nav-icon-wrapper' 
                    key={index} 
                    onClick={handleLogout}
                >
                    {item.icon}
                    <span>{item.linkContent}</span>
                    </NavLink>


                ):( 
                    <NavLink className='nav-icon-wrapper' key={index} to={item.path}> 
                    {item.icon}
                    <span>{item.linkContent}</span>
                   </NavLink>)
           
            ))}
        </div>
        <button onClick={logOut}>Log out </button>
    </div>
  )
}

export default SideNavbarEmployee