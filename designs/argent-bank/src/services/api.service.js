import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/user/login'
  }),
  endpoints: (builder) => ({
    getFidelity: builder.query({
      query: () => 'user'
    })
  })
});

export const { useGetUserQuery } = api;
