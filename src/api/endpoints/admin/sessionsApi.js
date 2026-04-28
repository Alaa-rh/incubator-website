// src/api/endpoints/sessionsApi.js
import { apiSlice } from "../../apiSlice";

export const sessionsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // إضافة جلسة جديدة
    addSession: builder.mutation({
      query: (sessionData) => ({
        url: '/admin/sessions/',
        method: 'POST',
        body: sessionData,
      }),
      invalidatesTags: ['Sessions'],
    }),

    // جلب جميع الجلسات
    getSessions: builder.query({
      query: () => '/admin/sessions/',
      providesTags: ['Sessions'],
    }),

  }),
});

export const {
  useAddSessionMutation,
  useGetSessionsQuery,
} = sessionsApi;