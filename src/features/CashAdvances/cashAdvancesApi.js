import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const cashAdvancesApi=createApi({
    reducerPath:'cashAdvancesApi',
    baseQuery:fetchBaseQuery({baseUrl:`http://localhost:3000/api/`}),
    tagTypes:[`cashAdvances`],
    endpoints:(builder)=>({
         createCashAdvance:builder.mutation({
            query:(cashadvance)=>({
                url:`cashadvances`,
                method:`POST`,
                body:cashadvance
            }),
            invalidatesTags:[`cashAdvances`]
         }),
         getAllCashAdvance:builder.query({
            query:()=>({
                url:`cashadvances`,
                method:`GET`
            })
         })
    })
})


export const {useCreateCashAdvanceMutation,useGetAllCashAdvanceQuery}=cashAdvancesApi