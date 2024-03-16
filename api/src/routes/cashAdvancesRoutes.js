import { Router } from "express";
import { createCashAdvances, getAllCashAdvances } from "../controllers/cashAdvances.controllers.js";





const cashAdvancesRouter=Router()

cashAdvancesRouter.post('/cashadvances', createCashAdvances)
cashAdvancesRouter.get('/cashadvances',getAllCashAdvances)





export default cashAdvancesRouter