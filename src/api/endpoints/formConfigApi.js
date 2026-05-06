// src/api/endpoints/formConfigApi.js
import { apiSlice } from "../apiSlice";

export const formConfigApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // جلب هيكل فورم المعرض
    getExhibitionFormConfig: builder.query({
      query: () => '/admin/form-config/exhibition/',
      providesTags: ['FormConfig'],
    }),

   
    //عرض تصميم النموذج season
    getSeasonFormDesign: builder.query({
      query: (id) => `/admin/seasons/${id}/form-design/`,
      providesTags: ['IncubationSeasons'],
    }),
  }),
});

export const {
  useGetExhibitionFormConfigQuery,
  useGetSeasonFormDesignQuery,
} = formConfigApi;