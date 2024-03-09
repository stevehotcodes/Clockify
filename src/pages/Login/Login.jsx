import React from 'react'
import '../Login/Login.scss'
import LoginFormbackgroundImage from '../../assets/login_background_image.avif'
import logo from '../../assets/Clockify-logo.png'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'




const Login = () => {

    const schema=yup.object().shape({
        email:yup.string().email().required("email is required"),
        password:yup.string().min(4).max(20).required("password is required "),

    })

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver:yupResolver(schema)
      });
     
      const onSubmit=(data)=>{
        console.log(data)
    }






  return (
    <div className='login-layout'>
        <div className='login-container'>
            <div className='login-background-theme-image-wrapper'>
                <img src={LoginFormbackgroundImage} alt=""  className='login-background-theme-image'/>
                <img src={logo} alt=""  className='logo'/>
            </div>
            <div className='login-form-wrapper'>
                <form  className='login-form'  onSubmit={handleSubmit(onSubmit)}>
                    
                <h3>Hi Welcome back </h3>
                <span>Please fill in your details to log in</span>
                <div class="label-input-group">
                    <label>Email</label><br/>
                    <input 
                        type="text"
                         name="" id="" 
                         placeholder="Email" 
                         {...register("email")}
                        
                         />  
                         <p className='error-message'>{errors.email?.message}</p>   

                </div>
    
                <div class="label-input-group">
                    <label>Password</label><br/>
                    <input 
                        type="password"
                         name="" id="" 
                         placeholder="Password"
                         {...register("password")}
                         
                         />

                         <p className='error-message'>{errors.password?.message}</p>
                 
                </div>
    
                <div class="label-input-group">
                    <input type="submit" class="sign-up-btn" value="Login"  />
                </div>
                <div class="form-footer">
                    <a href="/signup" Link="/signup">New Employee? Sign up</a>
                    {/* <a href="/reset">Forgot Password?</a> */}
                </div>
                </form>

            </div>
        </div>
    
    </div>
  )
}

export default Login