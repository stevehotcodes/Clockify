import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASEURL } from '../../configs/environment.variables.js'


export const positionApi=createApi({
    reducerPath:'positionApi',
    baseQuery:fetchBaseQuery({baseUrl:`${BASEURL}`}),
    tagTypes:['Positions'],
    endpoints:(builder)=>({
        createNewPosition:builder.mutation({
                query:(position)=>({
                    url:`position`,
                    method:`POST`,
                    body:position
                }),
                invalidatesTags:[`Positions`]
        }),

        getAllPositions:builder.query({
            query:()=>({
                url:`position`,
                method:"GET",

            }),
            providesTags:[`Positions`]
        }),

        getOnePosition:builder.query({
            query:(position_id)=>({
                url:`position/${position_id}`,
                method:`GET`
            }),
            providesTags:[`Positions`]
        }),

        editPosition:builder.mutation({
            query:(positionDetails)=>({
                url:`position/${positionDetails.position_id}`,
                method:`PATCH`,
                body:positionDetails
            }),
            invalidatesTags:[`Positions`]

        })

        



    })
})

export const{useCreateNewPositionMutation,useGetAllPositionsQuery,useEditPositionMutation,useGetOnePositionQuery}=positionApi