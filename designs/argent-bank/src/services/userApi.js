import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().login.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => 'user'
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: 'user/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    profileUser: builder.mutation({
      query: (credentials) => ({
        url: 'user/profile',
        method: 'POST',
        body: credentials,
      }),
    }),
    updateUserName: builder.mutation({
      query: (credentials) => ({
        url: 'user/profile',
        method: 'PUT',
        body: credentials,
      }),
    }),
  })
});

export const { useGetUserQuery, useLoginUserMutation, useProfileUserMutation, useUpdateUserNameMutation } = api;
