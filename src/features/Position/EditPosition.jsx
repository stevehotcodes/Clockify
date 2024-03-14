import React from 'react'
import '../Position/EditPosition.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditPositionMutation, useGetOnePositionQuery } from './positionApi';

const EditPosition = ({position}) => {
 console.log(position)
    // const [position,setPositionDescription]=useState('');
    const[gross_salary,setGrossSalary]=useState('');
    const{data:po, isError, isLoading}=useGetOnePositionQuery()
    const [createNewPosition]=useEditPositionMutation()
    const navigate=useNavigate()
      
    console.log(`data:${po}, error:${isError},isLoading:${isLoading}`)

  return (
    <div className='create-position-container'>
      {/* <ToasterContainer/> */}
            <div className='add-group-modal'>
 

 <form action="" >
   <h3 className='create-group-header'>Edit Position</h3>
    <div className="textarea">
        <input  placeholder='position' id='position'
           onChange={(e)=>{setPositionDescription(e.target.value)}}
        />

        </div>

   <div className="textarea">
      <input type="text" placeholder='gross salary' id='gross_salary'
            onChange={(e)=>{setGrossSalary(e.target.value)}}
            
         />
   </div>
       
        <div className="footer">
         <div className="btn">
            <button type='submit' >Edit  </button>
         </div>
         </div>
      </form>


   
   
   
      
    
    </div>
    </div>
  )
}

export default EditPosition