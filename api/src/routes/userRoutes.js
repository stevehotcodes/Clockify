import { Router } from "express";
import { getAllEmployees, registerNewUser } from "../controllers/users.controllers.js";





const userRouter=Router()

userRouter.post('/user',registerNewUser)
userRouter.get('/user', getAllEmployees)




export default userRouter