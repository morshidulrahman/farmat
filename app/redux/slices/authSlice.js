import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        authloading: ""
    },
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload
        },
        removeUesr: (state, action) => {
            state.user = action.payload
        },
        updateAuthloading: (state, action) => {
            state.authloading = action.payload
        }
    }
})

export const { updateUser, removeUesr, updateAuthloading } = authSlice.actions
export const selectUser = (state, action) => state.auth.user

export default authSlice.reducer