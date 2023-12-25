import {configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slice/carSlice";
import {authReducer} from "./slice/authSlice";

const store =configureStore({
    reducer:{
        cars:carReducer,
        auth:authReducer
    }
})

export {store}