import React from 'react'
import '../Positions/Positions.scss'
import { useState } from 'react';
import CreatePosition from '../../features/Position/CreatePosition';
import Modal from '../../components/Modal/Modal';
import { useGetAllPositionsQuery } from '../../features/Position/positionApi';
import EditPosition from '../../features/Position/EditPosition';

const Positions = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen]=useState(false)
    const {data:positions,isError,isLoading }=useGetAllPositionsQuery();

    console.log(`data:${positions}, error:${isError},isLoading:${isLoading}`)
    

    const openModal = () => {
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };


      const openEditModal = (id) => {
       
        setEditModalOpen(true)
      };
    
      const closeEidtModal = () => {
       
        setEditModalOpen(false)
      };


    const handleView=()=>{
        alert("hey I am open ")
    }

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
                    {positions&&positions.map((item,index)=>(
                        
                        <tr key={index}>
                            <td>{item.position_description}</td>
                            <td>{item.gross_salary}</td>
                            <td> <button onClick={(e)=>{e.stopPropagation(); openEditModal(item.position_id);}}>Edit</button>
                            {
                                isEditModalOpen&& (
                                    <Modal onClose={closeModal}>
                                      <EditPosition closeGroup={closeModal} position={item} />
                                    </Modal>
                                  )
                                
                            }
                            
                            </td>

                        </tr>


                    ))}
                   

                    
                   
                </tbody>
            </table>
        </div>









    </div>
  )
}

export default Positions