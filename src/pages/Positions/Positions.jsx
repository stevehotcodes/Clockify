import React from 'react'
import '../Positions/Positions.scss'

const Positions = () => {
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
                        <button className='add-new-btn'> Add New</button>
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