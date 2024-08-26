import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASEURL } from '../../configs/environment.variables.js'


export const payrollApi=createApi({
    reducerPath:'payrollApi',
    baseQuery:fetchBaseQuery({baseUrl:`${BASEURL}`}),
    tagTypes:['Payroll'],
    endpoints:(builder)=>({
        getPayRollRecords:builder.query({
            query:()=>({
                url:`payroll`,
                method:`GET`
            }),
            providesTags:[`Payroll`]
        }),
        getPayRollRecordsforAUser:builder.query({
            query:(user_id)=>({
                url:`payroll/user/${user_id}`,
                method:`GET`
            }),
            providesTags:[`Payroll`]
        })
    })
})

export const {useGetPayRollRecordsQuery,useGetPayRollRecordsforAUserQuery}=payrollApi