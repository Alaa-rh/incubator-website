// src/api/endpoints/absenceApi.js
import { apiSlice } from "../apiSlice";

export const absenceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // الموافقة على طلب غياب
    approveAbsence: builder.mutation({
      query: (requestId) => ({
        url: `/admin/absence/${requestId}/approve/`,
        method: 'POST',
      }),
      invalidatesTags: ['AbsenceRequests'],
    }),

    // إرسال تحذير لمشارك
    sendWarning: builder.mutation({
      query: (requestId) => ({
        url: `/admin/absence/${requestId}/warning/`,
        method: 'POST',
      }),
      invalidatesTags: ['AbsenceRequests'],
    }),

    // جلب طلبات الغياب
    getAbsenceRequests: builder.query({
      query: () => '/admin/absence/',
      providesTags: ['AbsenceRequests'],
    }),

  }),
});

export const {
  useApproveAbsenceMutation,
  useSendWarningMutation,
  useGetAbsenceRequestsQuery,
} = absenceApi;