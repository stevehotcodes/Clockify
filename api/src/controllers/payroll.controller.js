import { sendServerError } from "../helpers/helper.functions.js";
import { getAllCashAdvancesRecordforAnEmployeeService, getDeductionsforAnEmployeeService, getOvertimeRecordforAnEmployeeService } from "../services/deductionsServices.js";
import { createPayrollforanService, getPayRollRecordsService } from "../services/payrollService.js";
import { getAllEmployeesService } from "../services/userService.js"





export  const generatePayRoll=async(req,res)=>{
    try {
            const employees=await getAllEmployeesService();
            let  payroll=[]
            console.log(employees)

            for(let employee of employees){
                const deductions=await getDeductionsforAnEmployeeService(employee.user_id);
                const totalDeductions=deductions.reduce((acc,curr)=>acc+curr.amount,0);

                const cashAdvances=await getAllCashAdvancesRecordforAnEmployeeService(employee.user_id);
                const totalcashAdvances=cashAdvances.reduce((acc, curr)=>acc+curr.amount,0);

                const overtime=await getOvertimeRecordforAnEmployeeService(employee.user_id)
                console.log("overtime.rate",overtime)
                const totaloverTime=overtime.reduce((acc,curr)=>acc+(curr.number_of_hours*curr.rate_per_hours) , 0);

                const netPay = employee.gross_salary + totaloverTime - totalDeductions - totalcashAdvances  ;
        
            
                const payrollData={gross_salary:employee.gross_salary,totalDeductions,totaloverTime,totalcashAdvances,user_id:employee.user_id,netPay}
                console.log("pay roll data",payrollData)


                const employeePayroll=await createPayrollforanService(payrollData)
                console.log("employeePayroll response",employeePayroll)

                payroll.push(netPay)
               

            }
            
            return res.status(200).json(payroll)
        
    } catch (error) {
        sendServerError(res, error.message)
    }
}

export const getPayRollRecords=async(req,res)=>{
    try {
             const result =await getPayRollRecordsService()
             return res.status(200).json(result)
    } catch (error) {
       return sendServerError(res,error.message) 
    }
}