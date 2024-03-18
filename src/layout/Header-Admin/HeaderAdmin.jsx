import React from 'react'
import '../Header-Admin/HeaderAdmin.scss'
import logo from '../../assets/Clockify-logo.png'
import { FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import useLocalStorage from '../../hooks/useLocalStorage';



const HeaderAdmin = ({Dashboard}) => {

  const [userDetails, setUserDetails]=useLocalStorage('user')
  return (
    <div className='header-container'> 
      <div className="logo-title-wrapper">
      <div className='logo-wrapper'>
          <img src={logo} alt="logo" />
      </div>

      <div className='admin-dashboard-title'>
          <span>{Dashboard}</span>
      </div>
      </div>

      <div className='actions'>
          {/* <img src="" alt="search icon" />
           */}
           <FaSearch/>
           <IoIosNotificationsOutline/>
          
          
          <p className='logged-in-user'>{userDetails.firstname} {userDetails.lastname}</p>

      </div>
    
    
    </div>
  )
}

export default HeaderAdmin