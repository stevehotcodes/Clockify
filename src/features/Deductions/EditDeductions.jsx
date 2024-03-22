import React from 'react'
import { useState } from 'react';
import { useEditDeductionMutation } from './deductionsApi';
import { useNavigate } from 'react-router-dom';

const EditDeductions = ({deduction}) => {


    const[description,setDescription]=useState('')
    const[amount,setAmount]=useState('');
    const[user_id, setUserID]=useState('');
    const[EditDeduction]=useEditDeductionMutation()
    const navigate=useNavigate()


 

  return (
    // <div>EditDeductions</div>
    <div className='create-position-container'>
    <ToasterContainer/>
            <div className='add-group-modal'>
 

 <form action="" onSubmit={handleCreateDeduction}>
   <h3 className='create-group-header'>Create Deductions</h3>
    <div className="textarea">
        <input  type='text' placeholder='description ' id='description'
           onChange={(e)=>{setDescription(e.target.value)}}
        
        />

        </div>

   <div className="textarea">
      <input type="number" placeholder='amount' id='amount'
            onChange={(e)=>{setAmount(e.target.value)}}
         
         />
   </div>

   <div className="textarea">
      <input type="text" placeholder='employee id' id='user_id'
            onChange={(e)=>{setUserID(e.target.value)}}
         


         />
   </div>
       
        <div className="footer">
         <div className="btn">
            <button type='submit' >Create</button>
         </div>
         </div>
      </form>


     
    
    </div>
    </div>







  )
}

export default EditDeductions