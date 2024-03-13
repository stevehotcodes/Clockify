
import mssql from 'mssql';
import { poolRequest } from '../utils/sqlDbConnect.js';
import logger from '../utils/logger.js';
import * as uuid from 'uuid';

export const registerNewUserService = async (newUser) => {

    try {
        const user_id = uuid.v4();
        const skill_id= uuid.v4();
        const emergency_id = uuid.v4();
        
        console.log('Generated sk_id:', skill_id);
        console.log('Generated emergency_id:', emergency_id);
     

        const { firstname, middlename, lastname, identification_number, marital_status, gender, date_of_birth, email, phone_number, place_of_residence, course_of_study, institutiton, password, language, technical, emergency_person_name, emergency_phone_number, relationship } = newUser;
     
      
        // Insert user into tbl_user
        const result1 = await poolRequest()
            .input('user_id', mssql.VarChar, user_id)
            .input('firstname', mssql.VarChar, firstname)
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
            .input('institutiton', mssql.VarChar,institutiton)
            .input('password',mssql.VarChar,password)
            .input('skill_id', mssql.VarChar,skill_id)            
            .input('language',mssql.VarChar,language)
            .input('technical',mssql.VarChar,technical)
            .input('emergency_id', mssql.VarChar, emergency_id)
            .input('emergency_person_name', mssql.VarChar, emergency_person_name)
            .input('emergency_phone_number',mssql.VarChar,emergency_phone_number)
            .input('relationship',mssql.VarChar,relationship)
            

            .query(
              `INSERT INTO tbl_user(user_id,firstname, middlename, lastname,identification_number,gender,marital_status,date_of_birth,email,phone_number,place_of_residence,course_of_study,institutiton,password)
            VALUES(@user_id,@firstname, @middlename, @lastname,@identification_number,@gender, @marital_status,@date_of_birth,@email,@phone_number,@place_of_residence,@course_of_study,@institutiton,@password)

              INSERT INTO employee_skill(skill_id,language,technical,user_id)
              VALUES(@skill_id,@language,@technical,@user_id)

              INSERT INTO emergency_contact(emergency_id, emergency_person_name,emergency_phone_number,relationship,user_id)
             VALUES (@emergency_id,@emergency_person_name,@emergency_phone_number,@relationship,@user_id)


        `)


        return { result1};
    } catch (error) {
     
        logger.error(error);
        return error;
    }
};


