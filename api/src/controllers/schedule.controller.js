import { sendCreated, sendNotFound, sendServerError, sendSuccess } from "../helpers/helper.functions.js"
import { createNewScheduleService, getAllScheduleService } from "../services/scheduleService.js"
import logger from "../utils/logger.js"




export const createNewSchedule=async(req,res)=>{
    try {
           const newSchedule={
                in_time:req.body.in_time,
                out_time:req.body.out_time,
                schedule_description:req.body.schedule_description
           }

           logger.info(newSchedule)
           
           const response=await createNewScheduleService(newSchedule)
           logger.info(response)
           sendCreated(res,response)
        
    } catch (error) {
        logger.info(error)
        sendServerError(res,error)
    }
}

export const getAllSchedule=async(req,res)=>{
    try {
          const schedules=await getAllScheduleService()
          if(schedules.length>0){
            return res.status(200).json(schedules)
          }
          else{
            sendNotFound(res,'no records of schedules found')
          }
    } catch (error) {
        sendServerError(res,error)
    }
}