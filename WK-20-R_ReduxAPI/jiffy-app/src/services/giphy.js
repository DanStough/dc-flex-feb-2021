// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokemon } from "./types";

// Define a service using a base URL and expected endpoints
export const giphyApi = createApi({
  reducerPath: "giphyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "api.giphy.com/v1/gifs/search/" }),
  endpoints: (builder) => ({
    getGiphyNotJiphy: builder.query({
      query: (giphy) => `pokemon/${giphy}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGiphyNotJiphy } = giphyApi;
