// src/api/endpoints/formConfigApi.js
import { apiSlice } from "../apiSlice";

export const formConfigApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // جلب هيكل فورم المعرض
    getExhibitionFormConfig: builder.query({
      query: () => '/admin/form-config/exhibition/',
      providesTags: ['FormConfig'],
    }),

    // جلب هيكل فورم صاحب الفكرة
    getIdeaFormConfig: builder.query({
      query: () => '/admin/form-config/idea/',
      providesTags: ['FormConfig'],
    }),
  }),
});

export const {
  useGetExhibitionFormConfigQuery,
  useGetIdeaFormConfigQuery,
} = formConfigApi;