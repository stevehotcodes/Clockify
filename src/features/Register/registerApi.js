import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BASEURL} from '../../configs/environment.variables.js'



export const registerApi=createApi({
    reducerPath:'registerApi',
    baseQuery:fetchBaseQuery({baseUrl:`${BASEURL}`}),
    tagTypes:['Users'],
    endpoints:(builder)=>({
        registerNewUser:builder.mutation({
            query:(user)=>({
                url:`user`,
                method:`POST`,
                body:user
            }),
            invalidatesTags:['Users']
        }),
        getPositions:builder.query({
            query:()=>({
                url:`position`,
                method:'GET'
            })
        }),
        getSchedule:builder.query({
            query:()=>({
                url:`schedule`,
                method:'GET'

            })
        })
    })
})

export const {useRegisterNewUserMutation,useGetPositionsQuery,useGetScheduleQuery}=registerApi