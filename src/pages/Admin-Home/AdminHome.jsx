import React from 'react'
import HeaderAdmin from '../../layout/Header-Admin/HeaderAdmin'
import '../Admin-Home/AdminHome.scss'
import SideNavbarAdmin from '../../layout/SideNavbarAdmin/SideNavbarAdmin'
import MainContent from '../../layout/MainContent/MainContent'
const AdminHome = () => {
  return (
    <div className='admin-home-container'>
        <HeaderAdmin/>
        {/* <SideNavbarAdmin/>
         */}
         <MainContent/>



    </div>
  )
}

export default AdminHome