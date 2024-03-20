import React from 'react'
import '../Payroll-Employee/PayrollEmployee.scss'
import useLocalStorage from '../../hooks/useLocalStorage'


const PayrollEmployee = () => {
 const [userDetails, setUserDetails]=useLocalStorage('user')
 console.log(userDetails)


const dateofBirth= new Date(userDetails.date_of_birth)

const formattedDOB={
    date:dateofBirth.getUTCDate(),
    month:dateofBirth.getUTCMonth(),
    year:dateofBirth.getUTCFullYear()

}





  return (
    <div class="payroll-container" >
<table >
<tr className='title-bar'>
    <th className='title'>Clockify | Payroll   </th>
    <td className='time'>09/07/2024</td>
</tr>
<tr>
    <th>Identification Number</th>
    <td>{userDetails.identification_number}</td>
    <th>Name</th>
    <td>{userDetails.firstname} {userDetails.lastname}</td>
</tr>
<tr>
    <th>Employee Number</th>
    <td>{userDetails.user_id}</td>
    <th>Bank A/c No.</th>
    <td>0x2x6x25x6</td>
    
</tr>

<tr>
    <th>Date of Birth</th>
    <td>{formattedDOB.date}/{formattedDOB.month}/{formattedDOB.year}</td>
    <th>Payroll Number</th>
    <td></td>
</tr>



<tr>
    <th>Address</th>
    <td>Nyeri, Kenya</td>
    <th>Schedule</th>
    <td>Morning Shitft</td>
</tr>

<tr>
    <th>Position </th>
    <td>{userDetails.position_description}</td>
    {/* <th>Position </th>
    <td>Software Engineer</td> */}
    
    
</tr>
</table>
<tr></tr>
<br/>
<table >
<tr>
    <th >Earnings</th>
    <th>Amount</th>
    <th >Deductions</th>
    <th>Amount</th>
</tr>
<tr>
    <td>Gross Salary</td>
    <td>29000</td>
    <td>NSSF</td>
    <td>1900</td>
</tr>
<tr>
    <td>Overtime</td>
    <td>2000</td>
    <td>Income tax</td>
    <td>600</td>
</tr>
<tr>
    <td>special Allowance</td>
    <td>400</td>
    <td>Cash Advance</td>
    <td>500</td>
</tr>





<tr>
    <th>Gross Earnings</th>
    <td>Ksh. 38500</td>
    <th >Gross Deductions</th>
    <td>Ksh.3000</td>
</tr>
<tr>
        <td></td>
        <td><strong>NET PAY</strong></td>
        <td>Ksh.35500</td>
        <td></td>
</tr>
</table>
    </div>
  )
}

export default PayrollEmployee