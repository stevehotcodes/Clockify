import React from 'react'
import '../Login/Login.scss'
import LoginFormbackgroundImage from '../../assets/login_background_image.avif'
import logo from '../../assets/Clockify-logo.png'

const Login = () => {
  return (
    <div className='login-layout'>
        <div className='login-container'>
            <div className='login-background-theme-image-wrapper'>
                <img src={LoginFormbackgroundImage} alt=""  className='login-background-theme-image'/>
                <img src={logo} alt=""  className='logo'/>
            </div>
            <div className='login-form-wrapper'>
                <form  className='login-form'>
                    
                <h3>Hi Welcome back </h3>
                <span>Please fill in your details to log in</span>
                <div class="label-input-group">
                    <label>Email</label><br/>
                    <input type="text" name="" id="" placeholder="Email" />                  
                </div>
    
                <div class="label-input-group">
                    <label>Password</label><br/>
                    <input type="password" name="" id="" placeholder="Password" />
                 
                </div>
    
                <div class="label-input-group">
                    <input type="submit" class="sign-up-btn" value="Login"  />
                </div>
                </form>



            </div>
        </div>
    
    </div>
  )
}

export default Login