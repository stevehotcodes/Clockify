import React from 'react'
import { BarChart } from '@mui/x-charts'
import useLocalStorage from '../../hooks/useLocalStorage';
import {useCreateCheckInMutation, useCreateCheckOutMutation, useGetAllAttendanceRecordsQuery } from '../../features/Attendance/attendanceApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { ErrorToast, LoadingToast, SuccessToast, ToasterContainer } from '../../components/Toaster/Toaster';


const EmployeeAttendance = () => {
    
    const [userDetails, setUserDetails] = useLocalStorage('user');
    const [attendanceRecords,setAttendanceRecords]=useState([])
    const [CreateCheckIn]=useCreateCheckInMutation()
    const [CreateCheckOut]=useCreateCheckOutMutation()
    // console.log(userDetails)
    const loggedInUser=userDetails.user_id

    const{data:attendance, isError, isLoading}=useGetAllAttendanceRecordsQuery()

    console.log(`data:${attendance}, isError:${isError}`)
    
   const handleClockIn=async(e)=>{
       try {
        const response=await CreateCheckIn(loggedInUser).unwrap()
        console.log(response.message)
        LoadingToast(true)
        SuccessToast(response.message)
        LoadingToast(false)
        
        
       } catch (error) {
        console.log(error)
        ErrorToast(error.data.message)
        
       }
       finally{
        LoadingToast(false)
       }

   }

   const handleClockOut=async(e)=>{
     try {
        const response=await CreateCheckOut(loggedInUser).unwrap()
        console.log(response.message)
        LoadingToast(true)
        SuccessToast(response.message)
     } catch (error) {
        console.log(error)
        ErrorToast(error.data.message)
        
     }
     finally{
        LoadingToast(false)
       }
   }






  return (
    <div className='attendance-container'>
        <ToasterContainer/>
    <div className='title-bar'>

      <span>Attendance </span>
  </div>
  <div className='content-wrapper'>
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
      

          </div>
          <div className='search-add-new-btn'>
          <form action="">
                  <input type="search" name="" id="" placeholder='search for an position' />
          </form>
          <div  className='button-wrapper'>
                  <button className='add-new-btn'  onClick={handleClockIn}>Clock In</button>
                  <button className='add-new-btn' onClick={handleClockOut}>Clock Out</button>
          </div>
      
         
      </div>
          <table>
          <thead>
              <tr>
                  <th>Employee Id</th>
                  <th>Employee Name</th>
                  <th>Created At</th>
                  <th>Time in</th>
                  <th>Time Out</th>
                  {/* <th>No of hours worked</th> */}
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
            {attendance&&attendance.map((record,index)=>(
             <tr key={index}>
                 <td>{userDetails.user_id}</td>
                 <td>{userDetails.firstname}{userDetails.lastname}</td>
                 <td>{record.date}</td>
                 <td>{record.time_in}</td>
                 <td>{record.time_out}</td>
                 {/* <td>8</td> */}
                 <td>Edit</td>
             </tr>



            ))}

           
              
           



              
             
          </tbody>
      </table>
      
  </div>

</div>
  )
}

export default EmployeeAttendance


