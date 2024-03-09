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

                   </div>

                   <div className='label-input-wrapper'>
                   <div class="label-input-group">
                        <label>Passport Number/ National Id. Number</label><br/>
                        <input type="text" name="" id="" placeholder="passport no/national identification number"/>                  
                    </div>
                    <div class="label-input-group">
                        <label> Job Title/Position </label><br/>
                        <input type="text" name="" id="" placeholder="job title/position" />                  
                    </div>
        
                    <div class="label-input-group">
                        <label> Marital Status</label><br/>
                        <input type="text" name="" id="" placeholder="marital status" />
                    </div>

                   </div>
                   <div className='label-input-wrapper'>
                   <div class="label-input-group">
                        <label>P</label><br/>
                        <input type="text" name="" id="" placeholder="passport no/national identification number"/>                  
                    </div>
                    <div class="label-input-group">
                        <label> Job Title/Position </label><br/>
                        <input type="text" name="" id="" placeholder="job title/position" />                  
                    </div>
        
                    <div class="label-input-group">
                        <label> Marital Status</label><br/>
                        <input type="text" name="" id="" placeholder="marital status" />
                    </div>

                   </div>
                   <div className='label-input-wrapper'>
                   <div class="label-input-group">
                        <label>P</label><br/>
                        <input type="text" name="" id="" placeholder="passport no/national identification number"/>                  
                    </div>
                    <div class="label-input-group">
                        <label> Job Title/Position </label><br/>
                        <input type="text" name="" id="" placeholder="job title/position" />                  
                    </div>
        
                    <div class="label-input-group">
                        <label> Marital Status</label><br/>
                        <input type="text" name="" id="" placeholder="marital status" />
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