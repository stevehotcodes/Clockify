import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const registerApi=createApi({
    reducerPath:'registerApi',
    baseQuery:fetchBaseQuery({baseUrl:`http://localhost:3000/api/`}),
    tagTypes:['Users'],
    endpoints:(builder)=>({
        registerNewUser:builder.mutation({
            query:(user)=>({
                url:`user`,
                method:`POST`,
                body:user
            }),
            invalidatesTags:['Users']
        })
    })
})

export const {useRegisterNewUserMutation}=registerApi