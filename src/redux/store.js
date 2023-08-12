import { configureStore, } from '@reduxjs/toolkit';
import { moviesApi } from '../api/moviesApi';
import darkModeReducer from "./darkModeSlice"
import searchBarReducer from "../features/search/slices/searchSlice";
import advancedSearchReducer from "../features/search/slices/advancedSearchSlice";
import responsiveSideBarReducer from "./sideBarSlice";

import userReducer from './UserSlice'
export const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
        user:userReducer,
        darkMode: darkModeReducer,
        searchBar: searchBarReducer,
        advancedSearch:advancedSearchReducer,
        responsiveSideBar:responsiveSideBarReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesApi.middleware,),

})