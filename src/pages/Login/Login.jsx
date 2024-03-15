import React from 'react'
import '../Login/Login.scss'
import LoginFormbackgroundImage from '../../assets/login_background_image.avif'
import logo from '../../assets/Clockify-logo.png'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { Navigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import {ErrorToast, LoadingToast, SuccessToast, ToasterContainer} from '../../components/Toaster/Toaster'
import { useLoginUserMutation } from '../../features/Login/loginApi'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'





const Login = () => {


    const [loginUser]=useLoginUserMutation()
    const [userDetails, setUserDetails] = useLocalStorage('user', null);
    const [token, setToken] = useLocalStorage('token ', null);
    // console.log("user form the local storage ", userDetails,token )
    const navigate=useNavigate()

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
     
      const onSubmit=async(data)=>{
       LoadingToast()
        try {
            const response=await loginUser(data).unwrap();
            console.log(response)
            console.log("Response status:", response.status);
            console.log("Response data:", response);
         
            LoadingToast(false)
            setUserDetails(response.user);
            setToken(response.token)
            // navigate('/admin')
            console.log(userDetails,token )

            if(token){
                if( userDetails.role==='admin'){
                    SuccessToast(`Login in  successful as admin, Welcome ${data.email}`)
                    setTimeout(()=>{
                        navigate('/admin')
                    },2000)

                }
                else{
                    setTimeout(()=>{
                        navigate('/employee')
                    },2000)
                }

             
               
            }
            else{
                navigate('/')
            }

            
        } catch (error) {
            console.log(error)
            ErrorToast(error.data)
        }
        finally{
            LoadingToast(false)
        }

       
    }






  return (
    <div className='login-layout'>
    <ToasterContainer/>
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
                         name="" id="email" 
                         placeholder="Email" 
                         {...register("email")}
                        
                         />  
                         <p className='error-message'>{errors.email?.message}</p>   

                </div>
    
                <div class="label-input-group">
                    <label>Password</label><br/>
                    <input 
                        type="password"
                         name="" id="password" 
                         placeholder="Password"
                         {...register("password")}
                         
                         />

                         <p className='error-message'>{errors.password?.message}</p>
                 
                </div>
    
                {/* <NavLink  to='/admin' className="label-input-group"  > */}
                    <div className='label-input-group'>
                             <input type="submit" class="sign-up-btn" value="Login"  />
                    </div>
                  
                {/* </NavLink> */}
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