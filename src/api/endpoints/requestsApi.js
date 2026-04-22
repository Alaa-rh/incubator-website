// src/api/endpoints/requestsApi.js
import { apiSlice } from "../apiSlice";

export const requestsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // -----------------------------
    // جلب جميع الطلبات (استشارات + تطوع)
    // -----------------------------
    getAllRequests: builder.query({
      query: () => '/requests/',
      providesTags: ['Requests'],
    }),

    // -----------------------------
    // جلب طلبات الاستشارة فقط
    // -----------------------------
    getConsultationRequests: builder.query({
      query: () => '/requests/consultations/',
      providesTags: ['Requests'],
    }),

    // -----------------------------
    // جلب طلبات التطوع فقط
    // -----------------------------
    getVolunteerRequests: builder.query({
      query: () => '/requests/volunteers/',
      providesTags: ['Requests'],
    }),

    // -----------------------------
    // جلب طلب تطوع محدد بواسطة ID
    // -----------------------------
    getVolunteerRequestById: builder.query({
      query: (id) => `/requests/volunteers/${id}/`,
      providesTags: (result, error, id) => [{ type: 'Requests', id }],
}),
  }),
});

export const {
  useGetAllRequestsQuery,
  useGetConsultationRequestsQuery,
  useGetVolunteerRequestsQuery,
  useGetVolunteerRequestByIdQuery,
} = requestsApi;