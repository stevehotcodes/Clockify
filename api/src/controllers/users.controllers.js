import { send } from "vite";
import logger from "../utils/logger.js";
import generator from 'generate-password'
import { sendBadRequest, sendCreated, sendNotFound, sendServerError } from "../helpers/helper.functions.js";
import { findByCredentialsService, getAllEmployeesService, registerNewUserService } from "../services/userService.js";
import * as uuid from 'uuid'
import { userLoginValidator } from "../validators/user.validators.js";


var passwordGenerated = generator.generate({ 
    length: 10, 
    numbers: true
}); 



export const registerNewUser=async(req,res)=>{
    try {   

        const em_id = uuid.v4();
        const sk_id=uuid.v4()
        const newUser={
             firstname:req.body.firstname,
             middlename:req.body.middlename,
             lastname:req.body.lastname,
             identification_number:req.body.identification_number,
             gender:req.body.gender,
             marital_status:req.body.marital_status,
             date_of_birth:req.body.date_of_birth,
             email:req.body.email,
             phone_number:req.body.phone_number,
             place_of_residence:req.body.place_of_residence,
             course_of_study:req.body.course_of_study,
             institutiton:req.body.institutiton,
             password:passwordGenerated,
             language:req.body.language,
             technical:req.body.technical,
             emergency_person_name:req.body.emergency_person_name,
             emergency_phone_number:req.body.emergency_phone_number,
             relationship:req.body.relationship


          }


          const response=await registerNewUserService(newUser, em_id,sk_id)
          console.log(response)
          if(response.result1){
            
               sendCreated(res,`${newUser.firstname} has been registered successfully`)
          }
          else{
              sendBadRequest(res,`${newUser.firstname} records exists`)
          }

        
    } catch (error) {
        logger.error(error)
        sendServerError(res,error.message)
    }
}

export const getAllEmployees=async(req,res)=>{
    try {
          const  employees=await getAllEmployeesService()
          if(employees.length){
            return res.status(200).json(employees)
          }
          else{
            sendNotFound(res,"no records of employees found")
          }


    } catch (error) {
        sendServerError(res,error.message)
    }
}


export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const { error } = userLoginValidator({ email, password });
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            const userResponse = await findByCredentialsService({ email, password });
            if (userResponse.error) {
                // notAuthorized(res, userResponse.error);
                return res.status(400).json(userResponse.error)
            } else {

              console.log(userResponse)
            //   return   res.status(200).send(userResponse);
                console.log(userResponse)
               return  res.status(200).json({user:userResponse.user, token:userResponse.token});

            }
        } catch (error) {
            sendServerError(res, error.message)
        }
    }
};
