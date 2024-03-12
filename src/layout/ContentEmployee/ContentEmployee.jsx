import React from 'react'
import  '../ContentEmployee/ContentEmployee.scss'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import EmployeeDashboard from '../../pages/EmployeeDashboard/EmployeeDashboard'

const ContentEmployee = () => {
  return (
    <div className='content-container'>
        <Routes>
            <Route path='/employee' element={<EmployeeDashboard/>}/>
        </Routes>



    </div>
  )
}

export default ContentEmployee