import { apiSlice } from "../apiSlice";

export const projectsInfoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // معلومات المشروع (داخل لوحة التحكم)
    getProjectInfo: builder.query({
      query: (id) => `admin/projects/${id}/info/`,
      providesTags: ["Projects"],
    }),

    // تفاصيل المشروع الكاملة (لو احتجناها لاحقًا)
    getProjectDetails: builder.query({
      query: (id) => `admin/projects/${id}/details/`,
      providesTags: ["Projects"],
    }),

  }),
});
