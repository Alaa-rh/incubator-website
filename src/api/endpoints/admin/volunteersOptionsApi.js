// src/api/endpoints/usersApi.js
import { apiSlice } from "../apiSlice";

export const volunteersOptionsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // جلب المتطوعين
    getVolunteers: builder.query({
      query: () => '/admin/volunteers/',
      providesTags: ['Volunteers'],
    }),

    // جلب طلبات التطوع
    getVolunteerRequests: builder.query({
      query: () => '/admin/volunteer-requests/',
      providesTags: ['VolunteerRequests'],
    }),

    // جلب المقيمين
    getEvaluators: builder.query({
      query: () => '/admin/evaluators/',
      providesTags: ['Evaluators'],
    }),

    // قبول طلب تطوع
    approveVolunteerRequest: builder.mutation({
      query: (requestId) => ({
        url: `/admin/volunteer-requests/${requestId}/approve/`,
        method: 'POST',
      }),
      invalidatesTags: ['VolunteerRequests', 'Volunteers'],
    }),

    // رفض طلب تطوع
    rejectVolunteerRequest: builder.mutation({
      query: (requestId) => ({
        url: `/admin/volunteer-requests/${requestId}/reject/`,
        method: 'POST',
      }),
      invalidatesTags: ['VolunteerRequests'],
    }),

  }),
});

export const {
  useGetVolunteersQuery,
  useGetVolunteerRequestsQuery,
  useGetEvaluatorsQuery,
  useApproveVolunteerRequestMutation,
  useRejectVolunteerRequestMutation,
} = volunteersOptionsApi;