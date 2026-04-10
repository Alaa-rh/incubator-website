import { apiSlice } from "../apiSlice";

export const rolesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // ---------------------------------------------------
    // 1) Idea Owner Form → Pending (لا يعطي دور)
    // ---------------------------------------------------
    upgradeToIdeaOwner: builder.mutation({
      query: (data) => ({
        url: "roles/idea-owner/",
        method: "POST",
        body: data,
      }),
      // فقط نعمل invalidate لبيانات المستخدم
      invalidatesTags: ["User"],
    }),

    // ---------------------------------------------------
    // 2) Volunteer Form → Pending (لا يعطي دور)
    // ---------------------------------------------------
    upgradeToVolunteer: builder.mutation({
      query: (data) => ({
        url: "roles/volunteer/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    // ---------------------------------------------------
    // 3) Admin Approves Idea → يعطي دور ideaOwner
    // ---------------------------------------------------
    adminApproveIdea: builder.mutation({
      query: (userId) => ({
        url: `admin/approve-idea/${userId}/`,
        method: "PATCH",
      }),
      invalidatesTags: ["User", "Roles"],
    }),

    // ---------------------------------------------------
    // 4) Admin Approves Volunteer → يعطي دور volunteer
    // ---------------------------------------------------
    adminApproveVolunteer: builder.mutation({
      query: (userId) => ({
        url: `admin/approve-volunteer/${userId}/`,
        method: "PATCH",
      }),
      invalidatesTags: ["User", "Roles"],
    }),

    // ---------------------------------------------------
    // 5) Admin Assign Evaluator Role
    // ---------------------------------------------------
    adminAssignEvaluator: builder.mutation({
      query: (userId) => ({
        url: `admin/assign-evaluator/${userId}/`,
        method: "PATCH",
      }),
      invalidatesTags: ["User", "Roles"],
    }),

    // ---------------------------------------------------
    // 6) Admin Approves Incubation (صاحب فكرة → محتضن)
    // ---------------------------------------------------
    adminApproveIncubation: builder.mutation({
      query: (userId) => ({
        url: `admin/approve-incubation/${userId}/`,
        method: "PATCH",
      }),
      invalidatesTags: ["User", "Roles"],
    }),

  }),
});

export const {
  useUpgradeToIdeaOwnerMutation,
  useUpgradeToVolunteerMutation,
  useAdminApproveIdeaMutation,
  useAdminApproveVolunteerMutation,
  useAdminAssignEvaluatorMutation,
  useAdminApproveIncubationMutation,
} = rolesApi;
