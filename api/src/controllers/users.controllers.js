import { send } from "vite";
import logger from "../utils/logger.js";
import generator from 'generate-password'
import { sendBadRequest, sendCreated, sendServerError } from "../helpers/helper.functions.js";
import { registerNewUserService } from "../services/userService.js";
import * as uuid from 'uuid'


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
          if(response.rowsAffected>0){
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