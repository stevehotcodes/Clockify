import React from 'react'
import '../Content/Content.scss'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import AdminDashboard from '../../pages/AdminDashboard/AdminDashboard'




const Content = () => {
  return (
    <div className='content-container'>
        {/* <p>Content Container</p> */}

         <Routes>
            <Route path='/admin' element={<AdminDashboard/>}/>
            
            
         </Routes>
    </div>
  )
}


export default Content