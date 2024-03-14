import {configureStore} from '@reduxjs/toolkit'
import { registerApi } from '../features/Register/registerApi.js'
import {setupListeners} from '@reduxjs/toolkit/query'
import { positionApi } from '../features/Position/positionApi.js'




export const store =configureStore({
    reducer:{
        [registerApi.reducerPath]:registerApi.reducer,
        [positionApi.reducerPath]:positionApi.reducer,

    },
    middleware:(getDefaultMidddleware)=>
    getDefaultMidddleware().concat(
        registerApi.middleware,
        positionApi.middleware
    ),

})

setupListeners(store.dispatch)