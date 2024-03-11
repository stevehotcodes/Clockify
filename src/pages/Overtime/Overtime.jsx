import React from 'react'
import  '../Overtime/Overtime.scss'

const Overtime = () => {
  return (
    <div className='overtime-container'>
        <div className='title-bar'>
            <span>Overtime </span>
        </div>

        <div className='content-wrapper'>
        <table>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Number of Hours</th>
                        <th>Rate per hours</th>
                        <th>Telephone</th>
                        <th>Created on</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Stephen Ondieki</td>
                        <td>4</td>
                        <td>120</td>
                        <td>07045678907</td>
                        <td>14/03/2023</td>
                        <td> <span>View </span><span>Edit</span></td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Stephen Ondieki</td>
                        <td>4</td>
                        <td>120</td>
                        <td>07045678907</td>
                        <td>14/03/2023</td>
                        <td> <span>View </span><span>Edit</span></td>
                    </tr>


           
                   

                    
                   
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Overtime