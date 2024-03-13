import mssql from 'mssql'
import { poolRequest } from '../utils/sqlDbConnect.js'
import logger from '../utils/logger.js'



export const registerNewService=async()=>{
    try {
        
          const transaction =new mssql.Transaction()
          await transaction.begin()
          //begin the transaction

          const result1=await poolRequest(transaction)
          .input('firstname',mssql.VarChar,firstname)
          .input('middlename',mssql.VarChar,middlename)
          .input('lastname',mssql.VarChar,lastname)
          .input('identification_number', mssql.VarChar,identification_number)
          .input('gender',mssql.VarChar,gender)
          .input('marital_status',mssql.VarChar,marital_status)
          .input('date_of_birth',mssql.DateTime,date_of_birth)
          .input('email', mssql.VarChar,email)
          .input('phone_number', mssql.Int,phone_number)
          .input('place_of_residence',mssql.VarChar, place_of_residence)
          .input('course_of_study',mssql.VarChar,course_of_study)
          .input('institution', mssql.VarChar,institution)
            .query(`INSERT INTO tbl_user(firstname, middlename, lastname,identification_number,gender,marital_status,date_of_birth,email,phone_number,place_of_residence,course_of_study,institution)
            VALUES(@firstname, @middlename, @lastname,@identification_number,@gender, @marital_status,@date_of_birth,@email,@phone_number,@place_of_residence,@course_of_number,@institution)
          `)

          const result=await poolRequest(transaction)
          .input

        
    } catch (error) {
        
    }
}