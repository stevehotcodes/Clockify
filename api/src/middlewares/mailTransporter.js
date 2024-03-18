import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config()



export const transporter = nodemailer.createTransport({

        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:process.env.EMAIL || 'stevehotcodes@gmail.com',
            pass:process.env.PASSWORD || `fzqg xnjt tdlr qpzx`
        }
   
});