import {Router} from 'express'
import { generatePayRoll, getPayRollRecords, getPayRollRecordsforAUser } from '../controllers/payroll.controller.js'







const payrollRouter=Router()

payrollRouter.post('/payroll',generatePayRoll)
payrollRouter.get('/payroll', getPayRollRecords)
payrollRouter.get('/payroll/:user_id', getPayRollRecordsforAUser)







export default payrollRouter