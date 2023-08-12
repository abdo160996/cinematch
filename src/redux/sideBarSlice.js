import {createSlice} from '@reduxjs/toolkit';

const responsiveSideBar = createSlice({
    name:"responsiveSideBar",
    initialState:{showMobileSideBar:false},
    reducers:{
        toggleSideBar:(state,action)=> {state.showMobileSideBar = action.payload}
        
    },
 
})

export const {toggleSideBar} = responsiveSideBar.actions
export default responsiveSideBar.reducer