import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"





export const scheduleApi=createApi({
        reducerPath:'scheduleApi',
        baseQuery:fetchBaseQuery({baseUrl:`http://localhost:3000/api/`}),
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

                })

            })




        })


})

export const {useCreateNewScheduleMutation,useGetAllSchedulesQuery}=scheduleApi