import {Router} from 'express'
import { generatePayRoll, getPayRollRecords } from '../controllers/payroll.controller.js'







const payrollRouter=Router()

payrollRouter.post('/payroll',generatePayRoll)
payrollRouter.get('/payroll', getPayRollRecords)







export default payrollRouter