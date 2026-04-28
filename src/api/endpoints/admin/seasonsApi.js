// src/api/endpoints/seasonsApi.js
import { apiSlice } from "../apiSlice";

export const seasonsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // جلب مواسم الاحتضان (مع فلترة بالسنة)
    getIncubationSeasons: builder.query({
      query: (year) => `/admin/incubation-seasons/?year=${year}`,
      providesTags: ['IncubationSeasons'],
    }),

    // جلب تفاصيل موسم معين
    getSeasonDetails: builder.query({
      query: (id) => `/admin/incubation-seasons/${id}/`,
      providesTags: (result, error, id) => [{ type: 'IncubationSeasons', id }],
    }),

    // إضافة موسم جديد
    createIncubationSeason: builder.mutation({
      query: (data) => ({
        url: '/admin/incubation-seasons/',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['IncubationSeasons'],
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

    // حذف موسم
    deleteIncubationSeason: builder.mutation({
      query: (id) => ({
        url: `/admin/incubation-seasons/${id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['IncubationSeasons'],
    }),

  }),
});

export const {
  useGetIncubationSeasonsQuery,
  useGetSeasonDetailsQuery,
  useCreateIncubationSeasonMutation,
  useUpdateIncubationSeasonMutation,
  useDeleteIncubationSeasonMutation,
} = seasonsApi;