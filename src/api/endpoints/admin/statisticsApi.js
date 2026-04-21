import { apiSlice } from "../../apiSlice";

export const statisticsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // 1) إحصائيات عامة للصفحة
    getStatisticsStats: builder.query({
      query: () => "admin/statistics/stats/",
      providesTags: ["Statistics"],
    }),

    // 2) تحليل القطاعات
    getSectorAnalysis: builder.query({
      query: () => "admin/statistics/sector-analysis/",
      providesTags: ["Statistics"],
    }),

    // 3) دورة حياة المشاريع
    getProjectLifecycle: builder.query({
      query: () => "admin/statistics/project-lifecycle/",
      providesTags: ["Statistics"],
    }),

    // 4) مجالات الخبرة
    getExpertiseFields: builder.query({
      query: () => "admin/statistics/expertise-fields/",
      providesTags: ["Statistics"],
    }),

    // 5) مواسم الاحتضان
    getIncubationSeasons: builder.query({
      query: () => "admin/statistics/incubation-seasons/",
      providesTags: ["Statistics"],
    }),

  }),
});

export const {
  useGetStatisticsStatsQuery,
  useGetSectorAnalysisQuery,
  useGetProjectLifecycleQuery,
  useGetExpertiseFieldsQuery,
  useGetIncubationSeasonsQuery,
} = statisticsApi;
