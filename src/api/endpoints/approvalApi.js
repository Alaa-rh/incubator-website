import { apiSlice } from "../apiSlice";

export const approvalApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // الموافقة العامة لأي نوع (task, workshop, idea, project...)
    approve: builder.mutation({
      query: ({ type, id }) => ({
        url: `admin/${type}/${id}/approve/`,
        method: "POST",
      }),
      invalidatesTags: ["Approvals"],
    }),

    // الرفض العام لأي نوع
    reject: builder.mutation({
      query: ({ type, id, reason }) => ({
        url: `admin/${type}/${id}/reject/`,
        method: "POST",
        body: { reason },
      }),
      invalidatesTags: ["Approvals"],
    }),

  }),
});

export const {
  useApproveMutation,
  useRejectMutation,
} = approvalApi;
