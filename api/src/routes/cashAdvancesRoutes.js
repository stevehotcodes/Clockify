import { Router } from "express";
import { createCashAdvances } from "../controllers/cashAdvances.controllers.js";





const cashAdvancesRouter=Router()

cashAdvancesRouter.post('/cashadvances', createCashAdvances)





export default cashAdvancesRouter