// src/api/endpoints/participantsApi.js
import { apiSlice } from "../apiSlice";

export const participantsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // قبول مشارك  
    approveParticipant: builder.mutation({
      query: (participantId) => ({
        url: `/admin/participants/${participantId}/approve/`,
        method: 'POST',
      }),
      invalidatesTags: ['Participants'],
    }),

    // رفض مشارك  
    rejectParticipant: builder.mutation({
      query: (participantId) => ({
        url: `/admin/participants/${participantId}/reject/`,
        method: 'POST',
      }),
      invalidatesTags: ['Participants'],
    }),

    // جلب قائمة المشاركين
    getParticipants: builder.query({
      query: () => '/admin/participants/',
      providesTags: ['Participants'],
    }),

  }),
});

export const {
  useApproveParticipantMutation,
  useRejectParticipantMutation,
  useGetParticipantsQuery,
} = participantsApi;