// src/api/endpoints/absenceApi.js
import { apiSlice } from "../apiSlice";

export const absenceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

     // نقطة نهاية موحدة للقبول والتحذير
    decideAbsence: builder.mutation({
      query: ({ requestId, action }) => ({
        url: `/admin/bootcamp/absence/${requestId}/decide/`,
        method: 'POST',
        body: { action },
      }),
      invalidatesTags: ['AbsenceRequests'],
    }),

    // جلب طلبات الغياب
    getAbsenceRequests: builder.query({
      query: () => '/admin/bootcamp/absence/',
      providesTags: ['AbsenceRequests'],
    }),

  }),
});

export const {
  useDecideAbsenceMutation,
  useGetAbsenceRequestsQuery,
} = absenceApi;