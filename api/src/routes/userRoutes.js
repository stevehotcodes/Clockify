import { Router } from "express";
import { getAllEmployees, loginUser, registerNewUser } from "../controllers/users.controllers.js";





const userRouter=Router()

userRouter.post('/user',registerNewUser)
userRouter.get('/user', getAllEmployees)
userRouter.post('/login',loginUser)




export default userRouter