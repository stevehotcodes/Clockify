import express from 'express'
import dotenv from 'dotenv'
import { appPool } from './src/utils/sqlDbConnect.js'
import logger from './src/utils/logger.js'
import bodyParser from 'body-parser'
import cors from 'cors'

import positionRouter from './src/routes/positionRoutes.js'
import scheduleRouter from './src/routes/scheduleRoutes.js'
import userRouter from './src/routes/userRoutes.js'
dotenv.config()






const app=express()
const port =process.env.API_PORT 

//configuring the middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


app.get('/health',(req,res)=>{
    logger.info("horray, I am healthy")
    return res.status(200).send({message:"I am healthy"})
})

app.use('/api',positionRouter)
app.use('/api',scheduleRouter)
app.use('/api',userRouter)


// console.log('the password is :',passcode);


app.listen(port,()=>{
    logger.info(`I am running on http://localhost:${port}.............` )
})