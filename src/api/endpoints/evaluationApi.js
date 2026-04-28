// src/api/endpoints/evaluationApi.js
import { apiSlice } from "../apiSlice";

export const evaluationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // -----------------------------
    // 1) المشاريع للتقييم
    // -----------------------------

    // جلب المشاريع للتقييم (لصفحة التوزيع)
    getProjectsForEvaluation: builder.query({
      query: () => '/evaluation/projects/',
      providesTags: ['Evaluation'],
    }),

    // جلب تفاصيل مشروع معين للتقييم
    getProjectEvaluationDetails: builder.query({
      query: (projectId) => `/evaluation/projects/${projectId}/`,
      providesTags: (result, error, projectId) => [{ type: 'Evaluation', id: projectId }],
    }),

    // -----------------------------
    // 2) إرسال التقييم
    // -----------------------------

    // إرسال تقييم مشروع
    submitEvaluation: builder.mutation({
      query: (evaluationData) => ({
        url: '/evaluation/submit/',
        method: 'POST',
        body: evaluationData,
      }),
      invalidatesTags: ['Evaluation'],
    }),

    // جلب تقييم مشروع معين
    getEvaluationByProject: builder.query({
      query: (projectId) => `/evaluation/project/${projectId}/`,
      providesTags: (result, error, projectId) => [{ type: 'Evaluation', id: projectId }],
    }),

    // جلب نتائج التقييم لمشروع معين
    getEvaluationResults: builder.query({
      query: (projectId) => `/evaluation/results/${projectId}/`,
      providesTags: (result, error, projectId) => [{ type: 'Evaluation', id: projectId }],
    }),

    // -----------------------------
    // 3) معايير التقييم (حسب الموسم)
    // -----------------------------

    // جلب معايير التقييم لموسم معين
    getCriteria: builder.query({
      query: (seasonId) => `/evaluation/criteria/${seasonId}/`,
      providesTags: (result, error, seasonId) => [{ type: 'Criteria', id: seasonId }],
    }),

    // حفظ معايير التقييم لموسم معين (نشر)
    saveCriteria: builder.mutation({
      query: ({ seasonId, criteria }) => ({
        url: `/evaluation/criteria/${seasonId}/`,
        method: 'PUT',
        body: { criteria },
      }),
      invalidatesTags: (result, error, { seasonId }) => [{ type: 'Criteria', id: seasonId }],
    }),

    // -----------------------------
    // 4) الملاحظات
    // -----------------------------

    // جلب ملاحظات مقيم لمشروع معين
    getNotes: builder.query({
      query: (projectId) => `/evaluation/notes/${projectId}/`,
      providesTags: (result, error, projectId) => [{ type: 'Notes', id: projectId }],
    }),

    // إضافة ملاحظة جديدة
    addNote: builder.mutation({
      query: ({ projectId, userId, note }) => ({
        url: `/evaluation/notes/${projectId}/`,
        method: 'POST',
        body: { userId, note },
      }),
      invalidatesTags: (result, error, { projectId }) => [{ type: 'Notes', id: projectId }],
    }),

    // -----------------------------
    // 5) تعيين المقيمين
    // -----------------------------

    // جلب المقيمين المتاحين للتعيين
    getAvailableEvaluators: builder.query({
      query: () => '/evaluation/evaluators/available/',
      providesTags: ['Evaluators'],
    }),

    // تعيين مقيمين لمشروع معين
    assignEvaluators: builder.mutation({
      query: ({ projectId, evaluatorIds }) => ({
        url: `/evaluation/projects/${projectId}/assign/`,
        method: 'POST',
        body: { evaluatorIds },
      }),
      invalidatesTags: ['Evaluation', 'Evaluators'],
    }),

    // جلب المقيمين المعينين لمشروع معين
    getAssignedEvaluators: builder.query({
      query: (projectId) => `/evaluation/projects/${projectId}/evaluators/`,
      providesTags: (result, error, projectId) => [{ type: 'Evaluators', id: projectId }],
    }),

    // قبول مشروع (بعد التقييم)
    approveProject: builder.mutation({
      query: (projectId) => ({
        url: `/evaluation/projects/${projectId}/approve/`,
        method: 'POST',
      }),
      invalidatesTags: ['Evaluation'],
    }),

    // رفض مشروع (بعد التقييم)
    rejectProject: builder.mutation({
      query: (projectId) => ({
        url: `/evaluation/projects/${projectId}/reject/`,
        method: 'POST',
      }),
      invalidatesTags: ['Evaluation'],
    }),

  }),
});

export const {
  // المشاريع للتقييم
  useGetProjectsForEvaluationQuery,
  useGetProjectEvaluationDetailsQuery,

  // إرسال التقييم
  useSubmitEvaluationMutation,
  useGetEvaluationByProjectQuery,
  useGetEvaluationResultsQuery,

  // معايير التقييم
  useGetCriteriaQuery,
  useSaveCriteriaMutation,

  // الملاحظات
  useGetNotesQuery,
  useAddNoteMutation,

  // تعيين المقيمين
  useGetAvailableEvaluatorsQuery,
  useAssignEvaluatorsMutation,
  useGetAssignedEvaluatorsQuery,

  //قبول ورفض المشروع بعد التقييم
   useApproveProjectMutation,
   useRejectProjectMutation,
} = evaluationApi;