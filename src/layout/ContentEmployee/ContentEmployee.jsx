import React from 'react'
import  '../ContentEmployee/ContentEmployee.scss'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import EmployeeDashboard from '../../pages/EmployeeDashboard/EmployeeDashboard'
import EmployeeAttendance from '../../pages/EmployeeAttendance/EmployeeAttendance'
import EmployeePayroll from '../../pages/EmployeePayroll/EmployeePayroll'
import TimeInOut from '../../pages/TimeInOut/TimeInOut'

const ContentEmployee = () => {
  return (
    <div className='content-container'>
        <Routes>
            <Route path='/employee' element={<EmployeeDashboard/>}/>
            <Route path='/attendance-employee' element={<EmployeeAttendance/>}/>
            <Route path='/payroll-employee' element={<EmployeePayroll/>}/>
            <Route   path='/checkinout' element={<TimeInOut/>}/>
        </Routes>



    </div>
  )
}

export default ContentEmployee