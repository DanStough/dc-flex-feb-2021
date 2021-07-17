// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import queryString from 'querystring';

const API_KEY = "Rm3tsaKZrzUUdNfkud67rUrZE7xhq4fR";

// Define a service using a base URL and expected endpoints
export const giphyApi = createApi({
  reducerPath: 'giphyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.giphy.com/v1/' }),
  endpoints: (builder) => ({
    getGiphySearchResults: builder.query({
      query: (searchParams) => {
        const baseEndpoint = `gifs/search?`;
        const query = queryString.encode({
            ...searchParams,
            api_key: API_KEY
        });
        return baseEndpoint + query;
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGiphySearchResultsQuery } = giphyApi;
