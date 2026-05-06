// src/api/endpoints/sessionsApi.js
import { apiSlice } from "../../apiSlice";

export const sessionsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

  // إضافة جلسة جديدة  
   addSession: builder.mutation({
  query: (sessionData ) => ({
    url: `/admin/bootcamp/sessions/create`,
    method: 'POST',
    body: sessionData,
  }),
  invalidatesTags: ['Sessions'],
}),

 // جلب جميع الجلسات
    getSessions: builder.query({
      query: () => '/admin/bootcamp/sessions/',
      providesTags: ['Sessions'],
    }),

  }),
});

export const {
  useAddSessionMutation,
  useGetSessionsQuery,
} = sessionsApi;