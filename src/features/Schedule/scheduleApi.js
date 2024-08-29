import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {BASEURL} from '../../configs/environment.variables.js'




export const scheduleApi=createApi({
        reducerPath:'scheduleApi',
        baseQuery:fetchBaseQuery({baseUrl:`${BASEURL}`}),
        tagTypes:['Schedules'],
        endpoints:(builder)=>({
            createNewSchedule:builder.mutation({
                query:(schedule)=>({
                    url:`schedule`,
                    method:`POST`,
                    body:schedule
                }),
                invalidatesTags:['Schedules']
            }),
            getAllSchedules:builder.query({
                query:()=>({
                    url:`schedule`,
                    method:`GET`,

                }),
                providesTags:[`Schedules`]

            })




        })


})

export const {useCreateNewScheduleMutation,useGetAllSchedulesQuery}=scheduleApi