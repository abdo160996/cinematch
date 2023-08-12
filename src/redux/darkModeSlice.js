import {createSlice} from '@reduxjs/toolkit';

const darkMode = createSlice({
    name:"darkMode",
    initialState:{mode:localStorage.getItem("mode")|| "dark"},
    reducers:{
        changeMode:(state)=> {
            state.mode = state.mode === "dark" ? "light" : "dark"
            localStorage.setItem("mode",state.mode)
    }
        
    }
})

export const {changeMode} = darkMode.actions
export default darkMode.reducer