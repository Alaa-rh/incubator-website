import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/", //backend URL
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "Auth",
    "User",
    "Roles",
    "Projects",
    "Workshop",
    "WorkshopInfo",
    "Contact",
    "Consultations",
    "Consultants",
    "Activities",
    "Favorites",
    "FormConfig",
    "VolunteerProfile",
    "ProfileInfo",
    "Messages",
    "Notifications",
    "Schedule",
    "Requests",
    "Dashboard",
    "AdminUsers",
    "Statistics",
    "Approvals",
    "Tasks",
    "TeamRequests",
    "Team",
    "Incubation",
    "SuggestedVolunteers",
    "PublicProjects",
  ],
  endpoints: () => ({}),
});
