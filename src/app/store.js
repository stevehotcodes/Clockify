import {configureStore} from '@reduxjs/toolkit'
import { registerApi } from '../features/Register/registerApi.js'
import {setupListeners} from '@reduxjs/toolkit/query'
import { positionApi } from '../features/Position/positionApi.js'
import { scheduleApi } from '../features/Schedule/scheduleApi.js'




export const store =configureStore({
    reducer:{
        [registerApi.reducerPath]:registerApi.reducer,
        [positionApi.reducerPath]:positionApi.reducer,
        [scheduleApi.reducerPath]:scheduleApi.reducer

    },
    middleware:(getDefaultMidddleware)=>
    getDefaultMidddleware().concat(
        registerApi.middleware,
        positionApi.middleware,
        scheduleApi.middleware
    ),

})

setupListeners(store.dispatch)