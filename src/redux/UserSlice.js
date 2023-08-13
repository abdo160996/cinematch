import { createSlice } from "@reduxjs/toolkit";

import { authApi } from "../api/authApi";

const session = localStorage.getItem("sessionId")

const initialState = {
    requestToken: localStorage.getItem('requestToken') || null,
    sessionId: session || null,
    isLoggedIn: session ? true : false,
    showAlert: false
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        logout: (state) => {
         
            state.isLoggedIn = false;
            state.sessionId = null;
            localStorage.removeItem("requestToken");
            localStorage.removeItem("sessionId"); 
            state.showAlert = true;
        },
        closeSnack:(state)=>{state.showAlert=false}



    },
    extraReducers: (builder) => {

        builder.addMatcher(authApi.endpoints.getRequestToken.matchFulfilled, (state, { payload }) => {
            state.requestToken = payload.request_token;
            localStorage.setItem("requestToken", payload.request_token)

        }),
            builder.addMatcher(authApi.endpoints.createSession.matchFulfilled, (state, { payload }) => {
                state.isLoggedIn = true
                state.sessionId = payload.session_id;
                localStorage.setItem("sessionId", payload.session_id)
                state.showAlert = true
            })
    }
})
export default userSlice.reducer
export const { updateGuestId, logout,closeSnack } = userSlice.actions
export const loggedInSelector = (state) => state.user.isLoggedIn
export const sessionIdSelector = (state) => state.user.sessionId
export const alertSelector = (state) => state.user.showAlert

