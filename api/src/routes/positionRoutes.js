import { Router } from "express";
import { createNewPosition, getAllPositions } from "../controllers/position.controller.js";







const positionRouter =Router()

positionRouter.post('/position', createNewPosition)
positionRouter.get('/position',getAllPositions)





export default positionRouter