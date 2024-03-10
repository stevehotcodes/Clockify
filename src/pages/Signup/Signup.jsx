import React from 'react'
import '../Signup/Signup.scss'
import logo from '../../assets/Clockify-logo.png'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'



const Signup = () => {


    const schema=yup.object().shape({
        firstname:yup.string().required("firstname is required"),
        lastname:yup.string().required("lastname is required"),
        date_of_birth:yup.string().required("date of birth is required"),
        email:yup.string().email().required("email is required"),
        phone_number:yup.number().positive().integer().min(0).required("phone is required "),
        place_of_residence:yup.string().required("place of residence is required"),
        identification_number:yup.string().required(" passport number/ national identification number is required"),
        marital_status:yup.string().required("marital status is requred"),
        position:yup.string().required("job title or position  is required"),
        gross_salary:yup.string().required("propose gross salary is required"),
        course_of_study:yup.string().required("course of study is required"),
        institution:yup.string().required("institution of study is required"),
        graduation_date:yup.string().required("graduation date is required "),
        emergency_contact_person_name:yup.string().required("emergency contact  person's name is required"),
        emergency_contact_person_number:yup.string().required("emergency contact person's number is required"),
        emergency_contact_person_relationship:yup.string().required("relationship is required"),
        skills_languages:yup.string().required("languages are required"),
        skills_technical:yup.string().required("technical skills are required"),
        password:yup.string().min(4).max(20).required("password is required "),
        confirm_password:yup.string().min(4).max(20).required("confirm password is required")

    })
   const{
    register,
    handleSubmit,
    formState:{errors}
   }=useForm({
    resolver:yupResolver(schema)
   })

   
const onSubmit=(data)=>{
    console.log(data)
}




  return (
    <div className='signup-layout'>
        <div className='signup-container'>
        <form  className='signup-form' onSubmit={handleSubmit(onSubmit)}>
                    
             <img src={logo} alt=""  className='logo'/>
             <span>Please fill in your details to register</span>
                    <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label> First Name </label><br/>
                                    <input type="text"
                                     name="firstname" id="" 
                                     placeholder="First name"
                                     {...register('firstname')}
                                     
                                     />    
                                     <p className='error-message' >{errors.firstname?.message}</p>              
                                </div>
                                <div class="label-input-group">
                                    <label> Middle  Name </label><br/>
                                    <input type="text"
                                     name="middlename" id=""
                                     placeholder="Middle name" 
                                   
                                     
                                     />   
                              
                                </div>
                    
                                <div class="label-input-group">
                                    <label> Last Name </label><br/>
                                    <input type="text"
                                     name="lastname" id=""
                                     placeholder="Password" 
                                     {...register("lastname")}
                                      
                                      />
                                     <p className="error-message">{errors.lastname?.message}</p>
                                
                                </div>
                            </div>

                     <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label>Date of Birth</label><br/>
                                    <input type="date"
                                     name="date_of_birth" id="" placeholder="date of birth"  min="1900-01-01"  max="2007-12-31"
                                     {...register("date_of_birth")}
                                    
                                     
                                     /> 
                                     <p className="error-message">{errors.date_of_birth?.message}</p>                 
                                </div>
                                <div class="label-input-group">
                                    <label> Email </label><br/>
                                    <input type="email" name="" id="" placeholder="username@example.com" 
                                    
                                    {...register("email")}
                                    />  
                                    <p className="error-message">{errors.email?.message}</p>                
                                </div>
                    
                                <div class="label-input-group">
                                    <label> Phone Number </label><br/>
                                    <input type="number" name="" id="" placeholder="070383983477" max={10} 
                                    
                                    {...register("phone_number")}
                                    
                                    
                                    />
                                    <p className="error-message">{errors.phone_number?.message}</p>
                                </div>
                                <div class="label-input-group">
                                    <label> Place of Residence </label><br/>
                                    <input type="text" name="" id="" placeholder="Example:Nyeri"
                                      {...register("place_of_residence")}
                                    />
                                    <p className="error-message">{errors.place_of_residence?.message}</p>
                                </div>

                            </div>

                      <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label>Passport Number/ National Id. Number</label><br/>
                                    <input type="text" name="" id="" placeholder="passport no/national identification number"
                                    
                                    {...register("identification_number")}
                                    
                                    /> 
                                    <p className="error-message">{errors.identification_number?.message}</p>                 
                                </div>
                                <div class="label-input-group">
                                    <label> Marital Status</label><br/>
                                    <input type="text" name="" id="" placeholder="marital status" 
                                      {...register("marital_status")}
                                    
                                    />

                                    <p className="error-message">{errors.marital_status?.message}</p>
                                </div>
                                <div class="label-input-group">
                                    <label> Job Title/Position </label><br/>
                                    <input type="text" name="" id="" placeholder="job title/position"
                                      {...register("position")}
                                    
                                    
                                    />   
                                    <p className="error-message">{errors.position?.message}</p>               
                                </div>
                                <div class="label-input-group">
                                    <label> Proposed Gross Salary </label><br/>
                                    <input type="number" name="" id="" placeholder="Ksh 30000"  min='1'
                                     {...register("gross_salary")}

                                    />  
                                    <p className="error-message">{errors.gross_salary?.message}</p>                
                                </div>
                    
                               

                            </div>
                   
                      <div className='label-input-wrapper'>
                        <div class="label-input-group">
                                <label>Course of Study</label><br/>
                                <input type="text" name="" id="" placeholder="example : BSc.Computer Science"
                                
                                {...register("course_of_study")}
                                
                                
                                />    
                                <p className="error-message">{errors.course_of_study?.message}</p>              
                            </div>
                            <div class="label-input-group">
                                <label> Institution</label><br/>
                                <input type="text" name="" id="" placeholder="example : University of Nairobi"
                                
                                {...register("institution")}
                                
                                
                                
                                />    
                                <p className="error-message">{errors.institution?.message}</p>              
                            </div>
                
                            <div class="label-input-group">
                                <label> Graduation Year</label><br/>
                                <input type="date" name="" id="" placeholder="graduation year" min="1900-01-01"  max="today"
                                {...register("graduation_date")}
                                
                                
                                />
                                <p className="error-message">{errors.graduation_date?.message}</p>
                            </div>

                        </div>

                      <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label>Emergency Contact : Person's Name</label><br/>
                                    <input type="text" name="" id="" placeholder="example:John Doe"
                                     {...register("emergency_contact_person_name")}
                                    
                                    
                                    
                                    /> 
                                    <p className="error-message">{errors.emergency_contact_person_name?.message}</p>                 
                                </div>
                                <div class="label-input-group">
                                    <label> Emergency contact: Person's Number</label><br/>
                                    <input type="number" name="" id="" placeholder="07056576788" min="0"
                                     {...register("emergency_contact_person_number")}
                                    
                                    />   
                                    <p className="error-message">{errors.emergency_contact_person_number?.message}</p>               
                                </div>
                    
                                <div class="label-input-group">
                                    <label> Emergency Contact:Relationship</label><br/>
                                    <input type="text" name="" id="" placeholder="Example: brother, father ,sister ,spouse"
                                    {...register("emergency_contact_relationship")}
                                    
                                    />
                                    <p className="error-message">{errors.emergency_contact_person_relationship?.message}</p>
                                </div>

                            </div>

                      <div className='label-input-wrapper'>
                        <div class="label-input-group">
                                <label>Skills : Languages</label><br/>
                                <input type="text" name="" id="" placeholder="English, Kiswahil, French ,etc"
                                 {...register("skills_languages")}
                                
                                
                                /> 
                                <p className="error-message">{errors.skills_languages?.message}</p>                 
                            </div>
                            <div class="label-input-group">
                                <label> Skills: Technical </label><br/>
                                <input type="text" name="" id="" placeholder="Example: Javascript, MS-Word, Access, Microsoft Sql Server" 
                                 {...register("skills_technical")}
                                
                                /> 
                                <p className="error-message">{errors.skills_technical?.message}</p>                 
                            </div>
                    

                        </div>
                   
                   
                   <div className='label-input-wrapper'>
                   <div class="label-input-group">
                        <label>Password</label><br/>
                        <input type="password" name="" id="" placeholder="password"
                         {...register("password")}
                        
                        />  
                        <p className="error-message">{errors.password?.message}</p>                
                    </div>
                    <div class="label-input-group">
                        <label> Confirm Password </label><br/>
                        <input type="password" name="" id="" placeholder=" confirm password" 
                        {...register("confirm_password")}
                         
                        /> 
                        <p className="error-message">{errors.confirm_password?.message}</p>

                    </div>


        
               

                   </div>


        
                    <div class="label-input-group">
                        <input type="submit" class="sign-up-btn" value="Register"  />
                    </div>
                    <div class="form-footer">
                        <a href="/" > Already an  Employee? Log in</a>
                        {/* <a href="/reset">Forgot Password?</a> */}
                    </div>
                    </form>
            
        </div>




    </div>
  )
}

export default Signup