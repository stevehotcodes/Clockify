import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const attendanceApi=createApi({
    reducerPath:'attendance',
    baseQuery:fetchBaseQuery({baseUrl:`http://localhost:3000/api/`}),
    tagTypes:[`Attendance`],
    endpoints:(builder)=>({
        createCheckIn:builder.mutation({
            query:(user_id)=>({
                url:`attendance/in/${user_id}`,
                method:`POST`

            }),
            invalidatesTags:['Attendance']
        }),

        createCheckOut:builder.mutation({
            query:(user_id)=>({
                url:`/attendance/out/${user_id}`,
                method:`PATCH`
            }),
            invalidatesTags:[`Attendance`]
        }),
        getAttendanceforAUser:builder.query({
            query:(user_id)=>({
                url:`/attendance/user/${user_id}`,
                method:`GET`
            }),
            providesTags:[`Attendance`]
        }),
        getAllAttendanceRecords:builder.query({
            query:()=>({
                url:`/attendance`,
                method:`GET`
            }),
            providesTags:[`Attendance`]
        })

        

    })

})

export const{useCreateCheckInMutation,useCreateCheckOutMutation,useGetAllAttendanceRecordsQuery,useGetAttendanceforAUserQuery}=attendanceApi