import { sendBadRequest, sendCreated, sendNotFound, sendServerError } from "../helpers/helper.functions.js"
import { createNewPositionService, getAllPositionsService, getPositionByNameService } from "../services/positionsService.js"
import logger from "../utils/logger.js"






export const createNewPosition=async(req, res)=>{
    try {
           const positionDetails={
               position_description:req.body.position_description,
               gross_salary:req.body.gross_salary
           } 

           const position=await getPositionByNameService(positionDetails.position_description)
           if(position.length>0){
              sendBadRequest(res,`${positionDetails.position_description} position already exists `)
           }
           else{
            if(positionDetails.position_description=='' || positionDetails.gross_salary==''){
                sendBadRequest(res,'input for all fields is required')                          //validators
              
           }
           else{
                const response=await createNewPositionService(positionDetails)
                logger.info(response)
                if(response.rowsAffected>0){
                    sendCreated(res,`${req.body.position_description} created successfully`)
                }
              
           }

           }



          

          
        
    } catch (error) {
        sendServerError(res,error)
    }
}

export const getAllPositions=async(req,res)=>{
    try {
         const result=await getAllPositionsService()

         if(result.length>0){
            return res.status(200).json(result)
         }
         else{
            sendNotFound(res, 'no records of positions found')
         }
            
        
    } catch (error) {
        sendServerError(res,error.messsage)
        
    }
}