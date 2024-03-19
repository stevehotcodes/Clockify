import React from 'react'
import  '../ContentEmployee/ContentEmployee.scss'
import { Routes ,Navigate} from 'react-router-dom'
import { Route } from 'react-router-dom'
import EmployeeDashboard from '../../pages/EmployeeDashboard/EmployeeDashboard'
import EmployeeAttendance from '../../pages/EmployeeAttendance/EmployeeAttendance'
import EmployeePayroll from '../../pages/EmployeePayroll/EmployeePayroll'
import TimeInOut from '../../pages/TimeInOut/TimeInOut'
import Profile from '../../pages/Profile/Profile'

const ContentEmployee = () => {
  return (
    <div className='content-container'>
        <Routes>
            <Route
              path="/*"
              element={<Navigate to="/employee" replace />}
            />
            <Route path='/employee' exact element={<EmployeeDashboard/>}/>
            <Route path='/attendance-employee' element={<EmployeeAttendance/>}/>
            <Route path='/payroll-employee' element={<EmployeePayroll/>}/>
            <Route  path='/checkinout' element={<TimeInOut/>}/>
            <Route  path='/profile' element={<Profile/>}/>
        </Routes>



    </div>
  )
}

export default ContentEmployee