import React from 'react'
import '../EmployeeDashboard/EmployeeDashboard.scss'
import { SlPeople } from "react-icons/sl";
import {BarChart} from '@mui/x-charts/BarChart'


const EmployeeDashboard = () => {
  return (
    <div className='employee-dashboard-container'>
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

        <div className='graphs'>
           <BarChart
               series={[
                 { data: [35, 44, 24, 34] },
                 { data: [51, 6, 49, 30] },
                 { data: [15, 25, 30, 50] },
                 { data: [60, 50, 15, 25] },
               ]}
               height={290}
               xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
               margin={{ top: 50, bottom: 30, left: 40, right: 10 }}
           
           
           
           
           />
            <BarChart
               series={[
                 { data: [35, 44, 24, 34] },
                 { data: [51, 6, 49, 30] },
                 { data: [15, 25, 30, 50] },
                 { data: [60, 50, 15, 25] },
               ]}
               height={290}
               xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
               margin={{ top: 50, bottom: 30, left: 40, right: 10 }}
           
           
           
           
           />

        </div>

    </div>
</div>
  )
}

export default EmployeeDashboard