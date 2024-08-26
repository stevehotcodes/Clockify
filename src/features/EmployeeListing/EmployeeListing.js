import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "../../configs/environment.variables.js";

export const employeeListingApi=createApi({
    reducerPath:'employeeListingApi',
    baseQuery:fetchBaseQuery({baseUrl:`${BASEURL}`}),
    tagTypes:['Employees'],
    endpoints:(builder)=>({
        getAllEmployees:builder.query({
            query:()=>({
                url:`user`,
                method:`GET`

            }),
            providesTags:[`Employees`]
           
        }),

        getAllEmployeesByGender:builder.query({
            query:()=>({
                url:`user/gender`,
                method:`GET`
            }),
            providesTags:[`Employees`]
        })
    })

})

export const{useGetAllEmployeesQuery,useGetAllEmployeesByGenderQuery}=employeeListingApi