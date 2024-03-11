import React from 'react'
import HeaderAdmin from '../Header-Admin/HeaderAdmin'
import './AdminHome.scss'
import SideNavbarAdmin from '../SideNavbarAdmin/SideNavbarAdmin'
import MainContent from '../MainContent/MainContent'



const AdminHome = () => {
  return (
    <div className='admin-home-container'>
      
         <HeaderAdmin/>
         <MainContent/>

    </div>
  )
}


export default AdminHome