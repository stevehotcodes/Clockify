import emailTemp from "../templates/welcomeTemplate.js";
import { transporter} from "../middlewares/mailTransporter.js";
import dotenv from 'dotenv'
import logger from "../utils/logger.js";
import { getNewRegisterUsersService, setStatusofEmailtoSentService } from "../services/userService.js";




dotenv.config()


export const sendWelcomeMail=(email)=>{
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'WELCOME TO CLOCKIFY',
        html : emailTemp
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log('Error sending email:', error);
        } else {
          console.log('Email sent successfully:', info.response);
        
        }
      });
    

}
//query the database for new users

export const sendWelcomeEmailToNewUsers=async()=>{
    try {

        const newUsers=await getNewRegisterUsersService()
        //check if it empty
        if(newUsers.length==0){
            console.log("no new users found",newUsers)
            logger.info('No new users')
        }
        else{
            console.log(newUsers);
            newUsers.forEach(async (user)=>{
                sendWelcomeMail(user.email)
                //change teh state of the database of isEmailSent to 1
                const emailDeliveryStatus= await setStatusofEmailtoSentService(user.email)
                console.log("email delivery status",emailDeliveryStatus)
            })
        }

        
    } catch (error) {
        console.error('Error fetching new users:', error);
    }
}
