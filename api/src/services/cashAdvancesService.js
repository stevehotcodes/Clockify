import mssql from 'mssql'
import { poolRequest } from '../utils/sqlDbConnect.js'
import  * as uuid from 'uuid'





export const createCashAdvancesService=async()=>{
    try{
        const cash_advance_id=uuid.v4()
        const response=await poolRequest()
        .input('cash_adbvance_id',mssql.VarChar,cash_advance_id)
        .input('user_id', mssql.VarChar,user_id)
        .input('number_of_hours',mssql.VarChar,number_of_hours)
        .query(`
                INSERT INTO cash_advance(cash_advance_id,user_id,number_of_hours)
                VALUES(@cash_advance_id, @user_id,@number_of_hours)
        `)
         return response

    }
    catch(error){
        return error
    }
}