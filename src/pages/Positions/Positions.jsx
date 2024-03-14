import React from 'react'
import '../Positions/Positions.scss'
import { useState } from 'react';
import CreatePosition from '../../features/Position/CreatePosition';
import Modal from '../../components/Modal/Modal';

const Positions = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };


  return (
    <div className='positions-container'>
          <div className='title-bar'>
            <span>Positions  </span>
        </div>
        <div className='content-wrapper'>
        <div className='search-add-new-btn'>
                <form action="">
                        <input type="search" name="" id="" placeholder='search for an position' />
                </form>
                <div  className='button-wrapper'>
                        <button className='add-new-btn' onClick={openModal}> Add New</button>
                        {isModalOpen && (
            <Modal onClose={closeModal}>
              <CreatePosition closeGroup={closeModal} />
            </Modal>
          )}
                </div>
            
               
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Rate</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Software Developer</td>
                        <td>120</td>
                        <td>View Edit</td>
                    </tr>
                    <tr>
                        <td>Software Developer</td>
                        <td>120</td>
                        <td>View Edit</td>
                    </tr>
                    <tr>
                        <td>Software Developer</td>
                        <td>120</td>
                        <td>View Edit</td>
                    </tr>
                    

                    
                   
                </tbody>
            </table>
        </div>









    </div>
  )
}

export default Positions