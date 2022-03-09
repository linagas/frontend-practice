import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const meliApiBridge = createApi({
    reducerPath: "items",
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3001',
    }),
    endpoints: (builder) => ({
      getItems: builder.query({
        query: (search) => `/items?q=${search}`,
      }),
      getItem: builder.query({
        query: (id) => `/items/${id}`,
      }),
    }),
  });

export const { useGetItemsQuery, useGetItemQuery } = meliApiBridge;