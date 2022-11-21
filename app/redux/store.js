import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import basketReducer from "./slices/basketSlice";
export const store = configureStore({
    reducer: {
        auth: authSlice,
        basket: basketReducer
    }
})