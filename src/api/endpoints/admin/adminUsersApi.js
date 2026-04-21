import { apiSlice } from "../../apiSlice";

export const adminUsersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // 1) جلب جميع المستخدمين
    getAdminUsers: builder.query({
      query: () => "admin/users/",
      providesTags: ["AdminUsers"],
    }),

    // 2) إضافة مستخدم جديد
    addAdminUser: builder.mutation({
      query: (data) => ({
        url: "admin/users/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["AdminUsers"],
    }),

    // 3) تعديل دور المستخدم
    updateUserRole: builder.mutation({
      query: ({ id, role }) => ({
        url: `admin/users/${id}/role/`,
        method: "PATCH",
        body: { role },
      }),
      invalidatesTags: ["AdminUsers"],
    }),

    // 4) تعديل حالة الحساب (نشط / غير نشط)
    updateUserStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `admin/users/${id}/status/`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["AdminUsers"],
    }),

    // 5) حذف مستخدم
    deleteAdminUser: builder.mutation({
      query: (id) => ({
        url: `admin/users/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["AdminUsers"],
    }),
    // 6) جلب مستخدم واحد حسب ID
        getAdminUserById: builder.query({
        query: (id) => `admin/users/${id}/`,
        providesTags: ["AdminUsers"],
        }),


  }),
});

export const {
  useGetAdminUsersQuery,
  useAddAdminUserMutation,
  useUpdateUserRoleMutation,
  useUpdateUserStatusMutation,
  useDeleteAdminUserMutation,
  useGetAdminUserByIdQuery,
} = adminUsersApi;
