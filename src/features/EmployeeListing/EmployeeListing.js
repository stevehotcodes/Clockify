import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeListingApi=createApi({
    reducerPath:'employeeListingApi',
    baseQuery:fetchBaseQuery({baseUrl:`http://localhost:3000/api`}),
    tagTypes:['Employees'],
    endpoints:(builder)=>({
        getAllEmployees:builder.query({
            query:()=>({
                url:`user`,
                method:`GET`

            })
           
        })
    })

})

export const{useGetAllEmployeesQuery}=employeeListingApi