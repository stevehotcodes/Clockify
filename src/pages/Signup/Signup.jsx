import React from 'react'
import '../Signup/Signup.scss'
import logo from '../../assets/Clockify-logo.png'



const Signup = () => {
  return (
    <div className='signup-layout'>
        <div className='signup-container'>
        <form  className='signup-form'>
                    
             <img src={logo} alt=""  className='logo'/>
             <span>Please fill in your details to register</span>
                    <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label> First Name </label><br/>
                                    <input type="text" name="" id="" placeholder="First name" />                  
                                </div>
                                <div class="label-input-group">
                                    <label> Middle  Name </label><br/>
                                    <input type="text" name="" id="" placeholder="Middle name" />                  
                                </div>
                    
                                <div class="label-input-group">
                                    <label> Last Name </label><br/>
                                    <input type="password" name="" id="" placeholder="Password" />
                                
                                </div>
                            </div>

                     <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label>Date of Birth</label><br/>
                                    <input type="date" name="" id="" placeholder="date of birth"  min="1900-01-01"  max="2007-12-31"/>                  
                                </div>
                                <div class="label-input-group">
                                    <label> Email </label><br/>
                                    <input type="email" name="" id="" placeholder="username@example.com" />                  
                                </div>
                    
                                <div class="label-input-group">
                                    <label> Phone Number </label><br/>
                                    <input type="number" name="" id="" placeholder="070383983477" max={10} />
                                </div>
                                <div class="label-input-group">
                                    <label> Place of Residence </label><br/>
                                    <input type="text" name="" id="" placeholder="Example:Nyeri"  />
                                </div>

                            </div>

                      <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label>Passport Number/ National Id. Number</label><br/>
                                    <input type="text" name="" id="" placeholder="passport no/national identification number"/>                  
                                </div>
                                <div class="label-input-group">
                                    <label> Marital Status</label><br/>
                                    <input type="text" name="" id="" placeholder="marital status" />
                                </div>
                                <div class="label-input-group">
                                    <label> Job Title/Position </label><br/>
                                    <input type="text" name="" id="" placeholder="job title/position" />                  
                                </div>
                                <div class="label-input-group">
                                    <label> Proposed Gross Salary </label><br/>
                                    <input type="number" name="" id="" placeholder="Ksh 30000"  min='1'/>                  
                                </div>
                    
                               

                            </div>
                   
                      <div className='label-input-wrapper'>
                        <div class="label-input-group">
                                <label>Course of Study</label><br/>
                                <input type="text" name="" id="" placeholder="example : BSc.Computer Science"/>                  
                            </div>
                            <div class="label-input-group">
                                <label> Institution</label><br/>
                                <input type="text" name="" id="" placeholder="example : University of Nairobi" />                  
                            </div>
                
                            <div class="label-input-group">
                                <label> Graduation Year</label><br/>
                                <input type="date" name="" id="" placeholder="graduation year" min="1900-01-01"  max="today" />
                            </div>

                        </div>

                      <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label>Emergency Contact : Person's Name</label><br/>
                                    <input type="text" name="" id="" placeholder="example:John Doe"/>                  
                                </div>
                                <div class="label-input-group">
                                    <label> Emergency contact: Person's Contact</label><br/>
                                    <input type="number" name="" id="" placeholder="07056576788" min="0"/>                  
                                </div>
                    
                                <div class="label-input-group">
                                    <label> Emergency Contact:Relationship</label><br/>
                                    <input type="date" name="" id="" placeholder="graduation year" min="1900-01-01"  max="today" />
                                </div>

                            </div>

                      <div className='label-input-wrapper'>
                        <div class="label-input-group">
                                <label>Skills : Languages</label><br/>
                                <input type="text" name="" id="" placeholder="English, Kiswahil, French ,etc"/>                  
                            </div>
                            <div class="label-input-group">
                                <label> Skills: Technical </label><br/>
                                <input type="text" name="" id="" placeholder="Example: Javascript, MS-Word, Access, Microsoft Sql Server"  />                  
                            </div>
                    

                        </div>
                   
                   
                   <div className='label-input-wrapper'>
                   <div class="label-input-group">
                        <label>Password</label><br/>
                        <input type="password" name="" id="" placeholder="password"/>                  
                    </div>
                    <div class="label-input-group">
                        <label> Confirm Password </label><br/>
                        <input type="passoword" name="" id="" placeholder=" confirm password" min="0" />                  
                    </div>


        
               

                   </div>


        
                    <div class="label-input-group">
                        <input type="submit" class="sign-up-btn" value="Register"  />
                    </div>
                    <div class="form-footer">
                        <a href="/" Link="/"> Already an  Employee? Log in</a>
                        {/* <a href="/reset">Forgot Password?</a> */}
                    </div>
                    </form>
            
        </div>




    </div>
  )
}

export default Signup