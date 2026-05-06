// src/api/endpoints/seasonsApi.js
import { apiSlice } from "../apiSlice";

export const seasonsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    //جلب مواسم الاحتضان 
    getIncubationSeasons: builder.query({
      query: () => `/admin/seasons/`,
      providesTags: ['IncubationSeasons'],
    }),

    // جلب تفاصيل موسم معين
    getSeasonDetails: builder.query({
      query: (id) => `/admin/seasons/${id}/`,
      providesTags: (result, error, id) => [{ type: 'IncubationSeasons', id }],
    }),

    // إضافة موسم جديد
    createIncubationSeason: builder.mutation({
      query: (data) => ({
        url: '/admin/seasons/create/',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['IncubationSeasons'],
    }),

    //عرض تصميم النموذج
    getSeasonFormDesign: builder.query({
      query: (id) => `/admin/seasons/${id}/form-design/`,
      providesTags: ['IncubationSeasons'],
    }),

    // تحديث موسم
    updateIncubationSeason: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/incubation-seasons/${id}/`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'IncubationSeasons', id }],
    }),

     // إغلاق فترة التقديم لموسم معين
    closeSubmissions: builder.mutation({
      query: (season_id) => ({
        url: `/admin/seasons/${season_id}/close-submissions/`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, season_id) => [{ type: 'IncubationSeasons', id: season_id }],
    }),

  }),
});

export const {
  useGetIncubationSeasonsQuery,
  useGetSeasonDetailsQuery,
  useCreateIncubationSeasonMutation,
  useGetSeasonFormDesignQuery,
  useUpdateIncubationSeasonMutation,
  useCloseSubmissionsMutation,
} = seasonsApi;