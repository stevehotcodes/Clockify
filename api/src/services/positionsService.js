import mssql from 'mssql'
import { poolRequest } from '../utils/sqlDbConnect.js'
import  * as uuid from 'uuid'



export const  createNewPositionService=async(position)=>{
    try {
            const position_id=uuid.v4()
            const result =await poolRequest()
            .input('position_id', mssql.VarChar,position_id)
            .input('position_description',mssql.VarChar,position.position_description)
            .input('gross_salary',mssql.Int, position.gross_salary)
            .query(`INSERT INTO position (position_id, position_description,gross_salary)
                    VALUES (@position_id, @position_description,@gross_salary)
            `)
            return result
        
    } catch (error) {
        return error 
    }
}

export  const getPositionByNameService=async(position_description)=>{
    try {
          const response=await poolRequest()
          .input('position_description', mssql.VarChar,position_description)
          .query(`SELECT * FROM position WHERE position_description=@position_description `)

          return response.recordset
    } catch (error) {
        return error
    }
}

export const getAllPositionsService=async()=>{
    try {
         const result =await poolRequest()
          .query(`SELECT * FROM position`)
          return result.recordset

        
    } catch (error) {
        return error
    }
}