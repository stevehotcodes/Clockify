import React from 'react'
import  '../Overtime/Overtime.scss'
import { useGetAllOvertimeQuery } from '../../features/Overtime/overtimeApi'
import { useState } from 'react'
import Modal from '../../components/Modal/Modal';
import CreateOvertime from '../../features/Overtime/CreateOvertime';

const Overtime = () => {
    const{data:overtimes, isLoading, isError}=useGetAllOvertimeQuery()
    const [isModalOpen,setModalOpen]=useState(false)

    console.log(`data:${overtimes}, isLoading:${isLoading}`);

    const openModal=()=>{
        setModalOpen(true)
    }
    const closeModal=()=>{
        setModalOpen(false)
    }
    
    

  return (
    <div className='overtime-container'>
        
        <div className='title-bar'>
            <span>Overtime </span>
        </div>

        <div className='content-wrapper'>
        <div className='search-add-new-btn'>
                <form action="">
                        <input type="search" name="" id="" placeholder='search for an employee' />
                </form>
                <div  className='button-wrapper'>
                        <button className='add-new-btn' onClick={openModal}> Add New</button>

                    {
                        isModalOpen&&(
                            <Modal onClose={closeModal}>
                                <CreateOvertime closeModal={closeModal}/>
                            </Modal>
                        )
                    }
                </div>
               
            </div>

        <table>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Number of Hours</th>
                        <th>Rate per hours</th>
                        <th>Created on</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {overtimes&&overtimes.map((item,index)=>(
                          <tr key={index}>
                            <td>{item.overtime_id}</td>
                            <td>{item.firstname} {item.lastname}</td>
                            <td>{item.number_of_hours}</td>
                            <td>{item.rate_per_hours}</td>
                            <td>{item.created_on}</td>
                            <td> <span>Edit</span></td>
                      </tr>
                    
                    ))}                   

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Overtime