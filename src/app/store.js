import {configureStore} from '@reduxjs/toolkit'
import { registerApi } from '../features/Register/registerApi.js'
import {setupListeners} from '@reduxjs/toolkit/query'




export const store =configureStore({
    reducer:{
        [registerApi.reducerPath]:registerApi.reducer
    },
    middleware:(getDefaultMidddleware)=>
    getDefaultMidddleware().concat(
        registerApi.middleware
    ),

})

setupListeners(store.dispatch)