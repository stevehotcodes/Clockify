import React from 'react'
import '../AdminDashboard/AdminDashboard.scss'
import { SlPeople } from "react-icons/sl";

const AdminDashboard = () => {
  return (
    <div className='admin-dashboard-container'>
        <div className='title-bar'>
            <span>Home | Dashboard</span>
        </div>
        <div className='content-wrapper'>
            <div className='dashboard-cards'>
                 <div className='dashboard-card'>
                  <div className='icon-title'>
                     <SlPeople />
                  <span className='card-title'>Active Employee</span>
                  </div>
                
                  <span className='numbers'> 100</span>
                      
                 </div>

                 <div className='dashboard-card'>
                  <div className='icon-title'>
                     <SlPeople />
                  <span className='card-title'>Active Employee</span>
                  </div>
                
                  <span className='numbers'> 100</span>
                      
                 </div>
                 <div className='dashboard-card'>
                  <div className='icon-title'>
                     <SlPeople />
                  <span className='card-title'>Active Employee</span>
                  </div>
                
                  <span className='numbers'> 100</span>
                      
                 </div>
                 <div className='dashboard-card'>
                  <div className='icon-title'>
                     <SlPeople />
                  <span className='card-title'>Active Employee</span>
                  </div>
                
                  <span className='numbers'> 100</span>
                      
                 </div>
            </div>

        </div>
    </div>
  )
}

export default AdminDashboard