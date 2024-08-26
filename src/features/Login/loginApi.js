import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "../../configs/environment.variables.js";



export const loginApi=createApi({
    reducerPath:'loginApi',
    baseQuery:fetchBaseQuery({baseUrl:`${BASEURL}`}),
    tagTypes:[`Users`],
    endpoints:(builder)=>({
        loginUser:builder.mutation({
            query:(user)=>({
                url:`login`,
                method:'POST',
                body:user
            })
           
        })
    })

})

export const {useLoginUserMutation}=loginApi