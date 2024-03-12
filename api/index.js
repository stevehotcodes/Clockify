import express from 'express'
import dotenv from 'dotenv'
import { appPool } from './src/utils/sqlDbConnect.js'
import logger from './src/utils/logger.js'
import bodyParser from 'body-parser'
import cors from 'cors'
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





app.listen(port,()=>{
    logger.info(`I am running on http://localhost:${port}.............` )
})