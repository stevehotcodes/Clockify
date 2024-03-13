import { Router } from "express";
import { registerNewUser } from "../controllers/users.controllers.js";





const userRouter=Router()

userRouter.post('/user',registerNewUser)




export default userRouter