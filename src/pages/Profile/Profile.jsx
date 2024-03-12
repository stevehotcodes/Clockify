import React from 'react'
import '../Profile/Profile.scss'

const Profile = () => {
  return (
    <div className='profile-container'>
    <div className='title-bar'>
        <span>Profile</span>
        <button>Edit profile</button>
    </div>

    <div className='content-wrapper'>
        <div className='profile-section-one'>
            <img src="" alt="no profile image" className="profile-img" />
             <button className='upload-image-btn'>Change photo</button>
        </div>

        <div className='profile-section-two'>
            <div className='basic-info'>
            <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label> First Name </label><br/>
                                    <input readonly type="text"
                                     name="firstname" id="" 
                                     placeholder="First name"
                                     value="Stephen"
                                     
                                     />    
                                     
                                </div>
                                <div class="label-input-group">
                                    <label> Middle  Name </label><br/>
                                    <input readonly type="text"
                                     name="middlename" id=""
                                     placeholder="Middle name" 
                                     value="O."  
                                     
                                     />   
                              
                                </div>
                    
                                <div class="label-input-group">
                                    <label> Last Name </label><br/>
                                    <input readonly type="text"
                                     name="lastname" id=""
                                     placeholder="Password" 
                                     value="Ondieki" 
                                      
                                      />
                                  
                                
                                </div>
                </div>
                <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label> Email </label><br/>
                                    <input readonly type="text"
                                     name="email" id="" 
                                     placeholder="First name"
                                     value="ondiekistephen00@gmail.com"
                                     
                                     />    
                                     
                                </div>
                                <div class="label-input-group">
                                    <label> Passport No./National Id. No</label><br/>
                                    <input readonly type="text"
                                     name="identification" id=""
                                     placeholder="Middle name" 
                                     value="84948404"  
                                     
                                     />   
                              
                                </div>
                    
                                <div class="label-input-group">
                                    <label> Marital Status</label><br/>
                                    <input readonly type="text"
                                     name="marital status" id=""
                                     placeholder="Password" 
                                     value="Single" 
                                      
                                      />
                                  
                                
                                </div>
                </div>
                <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label> Job Description/Position</label><br/>
                                    <input readonly type="text"
                                     name="position" id="" 
                                     placeholder="no position"
                                     value="Software engineer"
                                     
                                     />    
                                     
                                </div>
                                <div class="label-input-group">
                                    <label> Gross Salary</label><br/>
                                    <input readonly type="text"
                                     name="identification" id=""
                                     placeholder="Middle name" 
                                     value="Ksh . 60,000"  
                                     
                                     />   
                              
                                </div>
                    
                                <div class="label-input-group">
                                    <label> Course of study</label><br/>
                                    <input readonly type="text"
                                     name="course of study" id=""
                                     placeholder="Course of study " 
                                     value="Bsc. Computer Science" 
                
                                      />
                                  
                                
                                </div>
                </div>

                <div className='label-input-wrapper'>
                        <div class="label-input-group">
                                <label>Skills : Languages</label><br/>
                                <input type="text" name="" id="" placeholder="English, Kiswahil, French ,etc"
                                value='English, French, Swahili'
                                
                                
                                /> 
                 
                            </div>
                            <div class="label-input-group">
                                <label> Skills: Technical </label><br/>
                                <input type="text" name="" id="" placeholder="Example: Javascript, MS-Word, Access, Microsoft Sql Server" 
                                value='React, Angular,Node, Javascript, TypeScript'
                                
                                /> 
             
                            </div>

                    
                    

                        </div>

                <div className='label-input-wrapper'>
                            
                <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label>Emergency Contact : Person's Name</label><br/>
                                    <input type="text" name="" id="" placeholder="example:John Doe"
                                    value='John Doe'
                                    
                                    
                                    
                                    /> 

                                </div>
                                <div class="label-input-group">
                                    <label> Emergency contact: Person's Number</label><br/>
                                    <input type="number" name="" id="" placeholder="07056576788" min="0"
                               
                                    value='07037383993'
                                    />   
              
                                </div>
                    
                                <div class="label-input-group">
                                    <label> Emergency Contact:Relationship</label><br/>
                                    <input type="text" name="" id="" placeholder="Example: brother, father ,sister ,spouse"
                                   value='brother'
                                    
                                    />

                                </div>

                            </div>
                </div>
                <div className='label-input-wrapper'>
                   <div class="label-input-group">
                        <label>Password</label><br/>
                        <input type="password" name="" id="" placeholder="password"
                        value='kkekkkkw'
                        
                        />  
                                       
                    </div>
                    <div class="label-input-group">
                        <label> Confirm Password </label><br/>
                        <input type="password" name="" id="" placeholder=" confirm password" 
                        value ='ddjdjdjdjdjdj'
                         
                        /> 
                        

                    </div>


        
               

                   </div>

            </div>
            
        </div>
      
      
    </div>

        
   </div>
  )
}

export default Profile