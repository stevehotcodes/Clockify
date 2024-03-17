import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const payrollApi=createApi({
    reducerPath:'payrollApi',
    baseQuery:fetchBaseQuery({baseUrl:`http://localhost:3000/api`}),
    tagTypes:['Payroll'],
    endpoints:(builder)=>({
        getPayRollRecords:builder.query({
            query:()=>({
                url:`payroll`,
                method:`GET`
            })
        })
    })
})

export const {useGetPayRollRecordsQuery}=payrollApi