import React from 'react'
import '../Content/Content.scss'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import AdminDashboard from '../../pages/AdminDashboard/AdminDashboard'
import EmployeeListing from '../../pages/EmployeeListing/EmployeeListing'
import Positions from '../../pages/Positions/Positions'
import Attendance from '../../pages/Attendance/Attendance'
import Schedules from '../../pages/Schedules/Schedules'




const Content = () => {
  return (
    <div className='content-container'>
        {/* <p>Content Container</p> */}

         <Routes>
            <Route path='/admin' element={<AdminDashboard/>}/>
            <Route path='/employeelisting' element={<EmployeeListing/>}/>
            <Route path='/positions' element={<Positions/>}/>
            <Route path='/attendance' element={<Attendance/>}/>
            <Route path='/schedules' element={<Schedules/>}/>
         </Routes>
    </div>
  )
}


export default Content