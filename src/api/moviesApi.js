
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const params = {
    language: 'en-US',
    with_original_language: "en",
    page: '1',
    include_adult: 'false',
    include_video: 'false',
}



const headers = {
    accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
}
const baseQuery = fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    headers: headers,

    

})

const myBaseQuery = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions)
    if (result?.data?.results) {
  
        return { data: result.data.results }
    }
    return result

}



export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    keepUnusedDataFor: 300,

    baseQuery: myBaseQuery,
    tagTypes: ["Ratedmovie", "Favmovie"],
    endpoints: (builder) => ({

        getPlayNow: builder.query({
            query: (mediaType) => ({
                params,
                url: `${mediaType}/${mediaType === "tv" ? "on_the_air" : "now_playing"}`,
            }),
        }),
        getUpcoming: builder.query({
            query: mediaType => ({
                params,
                url: `${mediaType}/upcoming`,

            }),

        }),
        getTrendingTvAndMovies: builder.query({
            query: () => ({
                params,
                url: "trending/all/week",
            }),
        }),

        getMovieAndTvDetails: builder.query({
            query: ({ mediaType, id }) => ({
                params,
                url: `${mediaType}/${id}`
            }),

        }),
        getTrending: builder.query({
            query: ({mediaType,pageNum}) => ({

                url: `trending/${mediaType}/week`,
                params: { ...params, page: pageNum }
            })
        }),

        getPopular: builder.query({
            query: ({mediaType,pageNum}) => ({

                url: `${mediaType}/popular`,
                params: { ...params, page: pageNum }
            })
        }),

        getTopRated: builder.query({
            query: ({mediaType,pageNum}) => ({

                url: `${mediaType}/top_rated`,
                params: { ...params, page: pageNum }
            })
        }),

        getMovieAndTvByKeyword: builder.query({
            query: ({ searchType, pageNum, debouncedValue }) => ({

                url: `search/${searchType}`,
                params: { ...params, page: pageNum, 'query': debouncedValue }
            }),
        }),


        getKeywordsList: builder.query({
            query: (keyword) => ({

                url: "search/keyword",
                params: { ...params, 'query': keyword }
            }),
            keepUnusedDataFor: 60 * 60
        }),

        getMoviesAndTvByFilter: builder.query({
            query: ({ filters, filterSearchType, pageNum }) => ({

                url: `discover/${filterSearchType}`,
                params: { ...params, ...filters, page: pageNum }
            })
        }),


        rateMovieAndTv: builder.mutation({
            query: ({ mediaType, id, sessionId, rating }) => ({
                url: `${mediaType}/${id}/rating`,
                method: "POST",
                params: { session_id: sessionId },
                body: { value: rating }
            }), 
            invalidatesTags: (result, error, args) => {
                const { mediaType } = args;
        
                return [`Rated${mediaType}`]
            }

        }),
        favMovieAndTV: builder.mutation({
            query: ({ sessionId, ...data }) => ({

                url: `account/19768429/favorite`,
                method: "POST",
                params: { session_id: sessionId },
                body: data
            }), 
            invalidatesTags: (result, error, args) => {
                const {media_type } = args
          
                return [`Fav${media_type}`]
            }
        }),
        getUserRatedMovies: builder.query({
            query: (sessionId) => ({
                url: `account/1/rated/movies?language=en-US&page=1&sort_by=created_at.asc`,
                params: { session_id: sessionId }
            }),
            providesTags: ["Ratedmovie"]
        }),
        getUserRatedTV: builder.query({
            query: (sessionId) => ({
                url: `account/1/rated/tv?language=en-US&page=1&sort_by=created_at.asc`,
                params: { session_id: sessionId }
            }),
            providesTags: ["Ratedtv"]
        }),

        getUserFavMovies: builder.query({
            query: (sessionId) => ({
                url: `account/19768429/favorite/movies`,
                params: { page: '1', session_id: sessionId, sort_by: 'created_at.asc' }
            }),
            providesTags: ["Favmovie"]

        }),
        getUserFavTV: builder.query({
            query: (sessionId) => ({
                url: `account/19768429/favorite/tv`,
                params: { page: '1', session_id: sessionId, sort_by: 'created_at.asc' }
            }),
            providesTags: ["Favtv"]
        }),
    })
})

export const {
    useGetUserRatedTVQuery,
    useGetUserFavTVQuery,
    useGetUserFavMoviesQuery,
    useFavMovieAndTVMutation,
    useGetUserRatedMoviesQuery,
    useRateMovieAndTvMutation,
    useGetPlayNowQuery,
    useGetUpcomingQuery,
    useGetMovieAndTvDetailsQuery,
    useGetTrendingQuery,
    useGetPopularQuery,
    useGetTopRatedQuery,
    useGetMovieAndTvByKeywordQuery,
    useGetKeywordsListQuery,
    useGetMoviesAndTvByFilterQuery,
    useGetTrendingTvAndMoviesQuery } = moviesApi

