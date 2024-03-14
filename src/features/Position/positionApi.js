import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'




export const positionApi=createApi({
    reducerPath:'positionApi',
    baseQuery:fetchBaseQuery({baseUrl:`http://localhost:3000/api/`}),
    tagTypes:['Positions'],
    endpoints:(builder)=>({
        createNewPosition:builder.mutation({
                query:(position)=>({
                    url:`position`,
                    method:`POST`,
                    body:position
                }),
                invalidatesTags:[`Position`]
        }),

        getAllPositions:builder.query({
            query:()=>({
                url:`position`,
                method:"GET",

            })
        })



    })
})

export const{useCreateNewPositionMutation,useGetAllPositionsQuery}=positionApi