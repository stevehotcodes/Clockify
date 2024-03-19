import React from 'react'
import '../Attendance/Attendance.scss'
import {BarChart} from '@mui/x-charts/BarChart'
import { useGetAllAttendanceRecordsQuery } from '../../features/Attendance/attendanceApi'
import { PuffLoader } from 'react-spinners'


const Attendance = () => {

   const{data:attendance,isLoading, isFetching}=useGetAllAttendanceRecordsQuery()
   console.log(`data:${attendance} , isLoading:${isLoading} ,isFetching:${isFetching}`)



  return (



    <div className='attendance-container'>
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
                        <button className='add-new-btn'> Add New</button>
                </div>
            
               
            </div>
                {(isLoading)? (<div className="status-loader">
            <div className='status-loader-content'>
               <PuffLoader loading={true} size={150} />
                <p>Please wait .........</p>
             </div>
           </div>): <table>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Created At</th>
                        <th>Time in</th>
                        <th>Time Out</th>
                        <th>No of hours worked</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {attendance&&attendance.map((record, index)=>(
                <tr key={index}>
                       
                     <td>{record.attendance_id}</td>
                     <td>{record.firstname} {record.lastname}</td>
                     <td>{record.date}</td>
                     <td>{record.time_in}</td>
                     <td>{record.time_out}</td>
                     <td>7</td>
                     <td>View Edit</td>
                 </tr>



                ))}                  
                   
                </tbody>
            </table>}
            
        </div>

    </div>
  )

}

export default Attendance