import { Router } from "express";
import { createTimeIn, createTimeOut, getAttendanceforAUser, getAttendanceforAllUsers } from "../controllers/attendance.controller.js";




const attendanceRouter =Router()

attendanceRouter.post('/attendance/in/:user_id', createTimeIn)
attendanceRouter.patch('/attendance/out/:user_id',createTimeOut)
attendanceRouter.get('/attendance/user/:user_id', getAttendanceforAUser)
attendanceRouter.get('/attendance',getAttendanceforAllUsers)







export default attendanceRouter