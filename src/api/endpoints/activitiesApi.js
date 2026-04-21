import { apiSlice } from './apiSlice';

export const activitiesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getActivities: builder.query({
      query: () => '/activities/',
      providesTags: ['Activities'],
    }),
  }),
});

export const { useGetActivitiesQuery } = activitiesApi;