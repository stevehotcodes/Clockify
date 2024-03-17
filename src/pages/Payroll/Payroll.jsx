import React from 'react'
import '../Payroll/Payroll.scss'
import { useGetPayRollRecordsQuery } from '../../features/Payroll/payrollApi'

const Payroll = () => {


    const {data:payRecords,isLoading,isFetching}=useGetPayRollRecordsQuery()

    console.log(`data:${payRecords},isLoading:${isLoading}, isFetching:${isFetching}`)
  return (
    <div className='payroll-container'>
         <div className='title-bar'>
            <span>Payroll </span>
        </div>

        <div className='content-wrapper'>
        <div className='search-add-new-btn'>
                
                <div  className='button-wrapper'>
                        <button className='add-new-btn'> Export to PDF </button>
                </div>
               
            </div>
        <table>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Working Hours/Rate</th>
                        <th>Overtime</th>
                        <th>Gross Pay</th>
                        <th>Deductions</th>
                        <th>Advance Pay</th>
                        <th>Net Pay</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {payRecords&&payRecords.map((payRecord,index)=>(
                     <tr key={index}>
                          <td>{payRecord.payroll_id}</td>
                          <td>{payRecord.firstname} {payRecord.lastname}</td>
                          <td>8/200</td>
                          <td>{payRecord.total_overtime}</td>
                          <td>{payRecord.gross_salary}</td>
                          <td>{payRecord.total_deductions}</td>
                          <td>{payRecord.total_cash_advances}</td>
                          <td>{payRecord.net_pay}</td>
                          <td> <span>View </span><span>Edit</span></td>
                      </tr>
                        

                    ))}
                  

                   


           
                   

                    
                   
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Payroll