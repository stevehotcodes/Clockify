import React from 'react'
import '../EmployeeListing/EmployeeListing.scss'
import { Link } from 'react-router-dom'

const EmployeeListing = () => {
  return (
    <div className='employee-listing-container'>
         <div className='title-bar'>
            <span>Employee Listing </span>
        </div>
        <div className='content-wrapper'>
            <div className='search-add-new-btn'>
                <form action="">
                        <input type="search" name="" id="" placeholder='search for an employee' />
                </form>
                <div  className='button-wrapper'>
                        <button className='add-new-btn'><Link to='/signup'>Add New</Link></button>
                </div>
               
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Position</th>
                        <th>Address</th>
                        <th>Telephone</th>
                        <th>Employeed on</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>stephen Ondieki</td>
                    <td>Software Engineer</td>
                    <td>Nyeri</td>
                    <td>07045678907</td>
                    <td>07/04/2024</td>
                    <td>View Edit</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>stephen Ondieki</td>
                    <td>Software Engineer</td>
                    <td>Nyeri</td>
                    <td>07045678907</td>
                    <td>07/04/2024</td>
                    <td>View Edit</td>
                    </tr>

                    <tr>
                    <td>3</td>
                    <td>stephen Ondieki</td>
                    <td>Software Engineer</td>
                    <td>Nyeri</td>
                    <td>07045678907</td>
                    <td>07/04/2024</td>
                    <td>View Edit</td>
                    </tr>

                    <tr>
                    <td>4</td>
                    <td>stephen Ondieki</td>
                    <td>Software Engineer</td>
                    <td>Nyeri</td>
                    <td>07045678907</td>
                    <td>07/04/2024</td>
                    <td>View Edit</td>
                    </tr>

                    
                   
                </tbody>
            </table>

        </div>


    </div>
  )
}

export default EmployeeListing