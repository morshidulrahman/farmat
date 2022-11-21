import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: [],
        authloading: ""
    },
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload
        },
        removeUsr: (state, action) => {
            state.user = action.payload
        },
        updateAuthloading: (state, action) => {
            state.authloading = action.fpayload
        }
    }
})

export const { updateUser, removeUsr, updateAuthloading } = authSlice.actions
export const selectUser = (state, action) => state.auth.user

export default authSlice.reducer