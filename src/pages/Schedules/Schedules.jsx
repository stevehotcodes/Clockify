import React from 'react'
import '../Schedules/Schedules.scss'
import '../Positions/Positions.scss'
import Modal from '../../components/Modal/Modal';
import CreateSchedule from '../../features/Schedule/CreateSchedule';
import { useState } from 'react';

const Schedules = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [isScheduleModalOpen, setScheduleModalOpen]=useState(false)
    


    const openModal = () => {
        setScheduleModalOpen(true);
      };
    
      const closeModal = () => {
        setScheduleModalOpen(false);
      };


  return (
    <div className='schedule-container'> 
              <div className='title-bar'>
            <span>Schedules</span>
        </div>

        <div className='content-wrapper'>
        <div className='search-add-new-btn'>
                <form action="">
                        <input type="search" name="" id="" placeholder='search for an position' />
                </form>
                <div  className='button-wrapper'>
                        <button className='add-new-btn' onClick={openModal}> Add New</button>
                        {
                            isScheduleModalOpen&&(
                                <Modal onClose={closeModal}>
                                    <CreateSchedule closeModal={closeModal}/>

                                </Modal>
                            )
                        }
                </div>

               
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Schedules</th>
                        
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>08:05am-05:00pm</td>
                        
                        <td>View Edit</td>
                    </tr>
                    <tr>
                        <td>07:00pm-02:00am</td>
                        
                        <td>View Edit</td>
                    </tr>
                    <tr>
                      
                    </tr>
                    

                    
                   
                </tbody>
            </table>

        </div>

    
    
    
    </div>
  )
}

export default Schedules