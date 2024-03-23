import { sendCreated, sendNotFound, sendServerError } from "../helpers/helper.functions.js"
import { createCashAdvancesService, editcashAdvanceService, getAllCashAdvancesServices } from "../services/cashAdvancesService.js"
import { getOneEmployeeService } from "../services/userService.js"

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
                sendCreated(res, `Cash advance for employee id${cashAdvances.user_id} has been created successfully`)
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

export const getAllCashAdvances=async(req,res)=>{
    try {
         const cashAdvances=await getAllCashAdvancesServices()
         if(cashAdvances.length){
            return res.status(200).json(cashAdvances)
         }
         else{
            sendNotFound(res,"records of the cash advances not found")
         }
        
    } catch (error) {
        sendServerError(res, error.message)
        
    }
}

export const editcashAdvances=async(req,res)=>{
    try {
        const user_id=req.params.user_id;
        const editedcashDeductionsDetails={
            amount:req.body.amount          
        
        }

        const response=await editcashAdvanceService(editedcashDeductionsDetails, user_id)

        console.log(response)
        return res.status(200).json(response)
      


        
    } catch (error) {
        sendServerError(res,error.message)
    }
}