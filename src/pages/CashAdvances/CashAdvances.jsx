import React from 'react'
import '../CashAdvances/CashAdvances.scss'
import Modal from '../../components/Modal/Modal';
import CreateAdvances from '../../features/CashAdvances/CreateAdvances';
import { useState } from 'react';
import { useGetAllCashAdvanceQuery } from '../../features/CashAdvances/cashAdvancesApi';

const CashAdvances = () => {

    const[isModalOpen, setModalOpen]=useState(false);
    const{data:advances,isError,isLoading}=useGetAllCashAdvanceQuery()

    console.log(`data:${advances},isError:${isError}, isLoading:${isLoading}`)

    const openModal=()=>{
        setModalOpen(true)
    }

    const closeModal=()=>{
        setModalOpen(false)
    }

    
  return (
    <div className='cash-advances-container'>
         <div className="title-bar">
            <span>Cash Advances</span>
        </div>
        <div className="content-wrapper">
        <div className='search-add-new-btn'>
                <form action="">
                        <input type="search" name="" id="" placeholder='search for an employee' />
                </form>
                <div  className='button-wrapper'>
                        <button className='add-new-btn' onClick={openModal}> Add New</button>
                        {isModalOpen&&(
                            <Modal onClose={closeModal}>
                                 <CreateAdvances/>
                            </Modal>
                        )}
                </div>
               
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Amount</th>
                        <th>No of hours</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                 {
                    advances&&advances.map((item, index)=>(
                        <tr key={index}>
                        <td>{item.user_id}</td>
                        <td>{item.firstname}  {item.lastname}</td>
                    
                        <td>{item.amount}</td>
                        <td>{item.number_of_hours}</td>
                        <td>{item.created_on}</td>
                        <td>View Edit</td>
                        </tr>

                    ))
                 }


                   

                    <tr>
                    <td>2</td>
                    <td>Stephen Ondieki</td>
                 
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

export default CashAdvances