import { createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { BASEURL } from "../../configs/environment.variables.js";



export const deductionApi=createApi({
    reducerPath:'dedcutionApi',
    baseQuery:fetchBaseQuery({baseUrl:`${BASEURL}`}),
    tagTypes:[`Deductions`],
    endpoints:(builder)=>({
        createNewDeduction:builder.mutation({
            query:(deduction)=>({
                url:`deduction`,
                method:`POST`,
                body:deduction
            }),
            invalidatesTags:[`Deductions`]
        }),

        getAllDeduction:builder.query({
            query:()=>({
                url:`deduction`,
                method:`GET`,
                
            }),
            providesTags:[`Deductions`]
        }),

        editDeduction:builder.mutation({
            query:(deduction)=>({
                url:`deduction/${deduction.user_id}`,
                method:`PUT`,
                body:deduction
            }),
            invalidatesTags:[`Deductions`]
        })
    })
})


export const {useCreateNewDeductionMutation,useGetAllDeductionQuery,useEditDeductionMutation}=deductionApi