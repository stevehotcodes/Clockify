import { sendServerError } from "../helpers/helper.functions.js"
import { createCashAdvancesService } from "../services/cashAdvancesService.js"

export const createCashAdvances=async(req,res)=>{
    try{
         const cashAdvances={
             user_id:req.body.user_id,
             amount:req.body.amount,
             number_of_hours:req.body.number_of_body

         }

         const user=await getOneEmployeeService(cashAdvances.user_id)
         if(user.length){
            const response=await createCashAdvancesService(cashAdvances)
            console.log(response)
            if(response.rowsAffected>0){
                sendCreated(res, `Cash for employee id${cashAdvances.user_id}`)
            }
            
         }
         else{
            sendNotFound(res,"employee records not found")
         }

        
    }
    catch(error){
        sendServerError(res,error.message)
    }
}