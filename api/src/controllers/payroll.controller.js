import e from "express";
import { sendNotFound, sendServerError } from "../helpers/helper.functions.js";
import { getAllCashAdvancesRecordforAnEmployeeService, getDeductionsforAnEmployeeService, getOvertimeRecordforAnEmployeeService } from "../services/deductionsServices.js";
import { createPayrollforanService, getPayRollRecordsService } from "../services/payrollService.js";
import { getAllEmployeesService } from "../services/userService.js"





export  const generatePayRoll=async(req,res)=>{
    try {
            const employees=await getAllEmployeesService(); ///fetch all employees
            let  payroll=[]
        

            for(let employee of employees){
                const deductions=await getDeductionsforAnEmployeeService(employee.user_id);
                const totalDeductions=deductions.reduce((acc,curr)=>acc+curr.amount,0);

                const cashAdvances=await getAllCashAdvancesRecordforAnEmployeeService(employee.user_id);
                const totalcashAdvances=cashAdvances.reduce((acc, curr)=>acc+curr.amount,0);

                const overtime=await getOvertimeRecordforAnEmployeeService(employee.user_id)
                const totaloverTime=overtime.reduce((acc,curr)=>acc+(curr.number_of_hours*curr.rate_per_hours) , 0);

                const netPay = employee.gross_salary + totaloverTime - totalDeductions - totalcashAdvances  ;
        
            
                const payrollData={gross_salary:employee.gross_salary,totalDeductions,totaloverTime,totalcashAdvances,user_id:employee.user_id,netPay}
            

                const employeePayroll=await createPayrollforanService(payrollData)
                console.log("employeePayroll response",employeePayroll)

                payroll.push(netPay)
        

            }
            console.log("this is the payroll", payroll)

            
            return res.status(200).json(payroll)
        
    } catch (error) {
        return res.status(500).json("Error in creating the payroll")
    }
}

export const getPayRollRecords=async(req,res)=>{
    try {
             const result =await getPayRollRecordsService()   

             result.length?(res.status(200).json(result)):(sendNotFound(res,"no records for payroll"))

            
    } catch (error) {
       return sendServerError(res,error.message) 
    }
}