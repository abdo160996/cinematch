import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    showSearch:false,
    searchValue:'',
    searchType:'movie',
    filterSearchType:"movie"
}
const searchBar = createSlice({
    name: "searchBar",
    initialState,
    reducers: {
        showSearchBar: (state) => {state.showSearch = !state.showSearch},
        setSearchValue:(state,action)=>{state.searchValue = action.payload},
        setSearchType:(state,action)=>{state.searchType = action.payload},
        setFilterSearchType:(state,action)=>{state.filterSearchType = action.payload},

    }
})

export const { showSearchBar,setSearchValue,setSearchType,setFilterSearchType } = searchBar.actions
export default searchBar.reducer