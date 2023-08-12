import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    genres: [],
    keywords: [],
    with_original_language: 'en',
    with_origin_country: '',
    'vote_count.gte': 500,
    'vote_average.gte': 0,
    'vote_average.lte': 8,
    sort_by: 'popularity.desc',
}
const advancedSearch = createSlice({
    name: "advancedSearch",
    initialState,
    reducers: {
        updateGenres: (state, action) => { state.genres = action.payload },
        updateKeywords: (state, action) => { state.keywords = action.payload },

        updateStartDate: (state, action) => {
            const { searchType, date } = action.payload
            return ({ ...state, [searchType === "movie" ? 'primary_release_date.gte' : 'first_air_date.gte']: date })
        },

        updateEndDate: (state, action) => {
            const { searchType, date } = action.payload
            return ({ ...state, [searchType === "movie" ? 'primary_release_date.lte' : 'first_air_date.lte']: date })
        } ,

        updateLanguage: (state, action) => { state.with_original_language = action.payload },
        updateCountry: (state, action) => { state.with_origin_country = action.payload },
        updateMinVoteCount: (state, action) => { state['vote_count.gte'] = action.payload },
        updateMaxVoteAverage: (state, action) => { state['vote_average.lte'] = action.payload },
        updateSortBy: (state, action) => { state.sort_by = action.payload }
    }
})

export const {
    updateGenres,
    updateKeywords,
    updateMovieStartDate,
    updateMovieEndDate,
    updateLanguage,
    updateMinVoteCount,
    updateMaxVoteAverage,
    updateSortBy,
    updateCountry,
    updateTVStartDate, updateTVEndDate, updateStartDate, updateEndDate } = advancedSearch.actions
export default advancedSearch.reducer