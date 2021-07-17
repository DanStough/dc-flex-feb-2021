// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const dogApi = createApi({
  reducerPath: 'dogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dog.ceo/api/' }),
  endpoints: (builder) => ({
    getRandomDogImages: builder.query({
      query: (count) => `breeds/image/random/${count}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRandomDogImagesQuery } = dogApi
