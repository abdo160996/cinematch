
import { moviesApi } from "./moviesApi";

export const authApi = moviesApi.injectEndpoints({
    endpoints: (builder) => ({
        getRequestToken: builder.query({
            query: () => ({
                url: 'authentication/token/new',
            }),
        }),

        createSession: builder.mutation({
            query: (requestToken) => ({
                method: "POST",
                url: 'authentication/session/new',
                body: requestToken
            }),
        }),

    })

})

export const { useLazyGetRequestTokenQuery,useCreateSessionMutation } = authApi