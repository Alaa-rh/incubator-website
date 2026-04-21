import { apiSlice } from "../../apiSlice";

export const adminTasksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // 1) جلب كل المهام
    getTasks: builder.query({
      query: () => "admin/tasks/",
      providesTags: ["Tasks"],
    }),

    // 2) جلب مهمة واحدة حسب ID
    getTaskById: builder.query({
      query: (id) => `admin/tasks/${id}/`,
      providesTags: ["Tasks"],
    }),

    // 3) تعديل مهمة
    updateTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `admin/tasks/${id}/`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),

    // 4) حذف مهمة
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `admin/tasks/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),

  }),
});

export const {
  useGetTasksQuery,
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = adminTasksApi;
