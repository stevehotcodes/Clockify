import React from 'react'
import '../Deductions/Deductions.scss'

const Deductions = () => {
  return (
    <div className='deductions-container'>
        <div className="title-bar">
            <span>Deductions</span>
        </div>
        <div className="content-wrapper">
        <div className='search-add-new-btn'>
                <form action="">
                        <input type="search" name="" id="" placeholder='search for an employee' />
                </form>
                <div  className='button-wrapper'>
                        <button className='add-new-btn'> Add New</button>
                </div>
               
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Deduction Type</th>
                        <th>Amount</th>
                        <th>Telephone</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Stephen Ondieki</td>
                    <td>NSSF</td>
                    <td>2000</td>
                    <td>07045678907</td>
                    <td>07/04/2024</td>
                    <td>View Edit</td>
                    </tr>

                    <tr>
                    <td>2</td>
                    <td>Stephen Ondieki</td>
                    <td>NSSF</td>
                    <td>2000</td>
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

export default Deductions