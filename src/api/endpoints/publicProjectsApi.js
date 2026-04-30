import { apiSlice } from "../apiSlice";

export const publicProjectsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // جلب مشروع واحد للعرض العام
    getPublicProjectById: builder.query({
      query: (id) => `projects/${id}/`,
      providesTags: ["PublicProjects"],
    }),

    // جلب كل المشاريع للبطاقات
    getPublicProjects: builder.query({
      query: () => `projects/`,
      providesTags: ["PublicProjects"],
    }),

    //جلب المشاريع المحتضنة للادارة
    getIncubatedProjects: builder.query({
      query: () => `/admin/incubations/projects`,
      providesTags: ["PublicProjects"],
    }),
  }),
});

export const {
  useGetPublicProjectByIdQuery,
  useGetPublicProjectsQuery,
  useGetIncubatedProjectsQuery,
} = publicProjectsApi;
