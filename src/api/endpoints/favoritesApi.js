import { apiSlice } from './apiSlice';

export const favoritesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // جلب قائمة المشاريع المفضلة للمستخدم
    getFavorites: builder.query({
      query: () => '/favorites/',
      providesTags: ['Favorites'],
    }),

    // إضافة مشروع إلى المفضلة
    addToFavorites: builder.mutation({
      query: (projectId) => ({
        url: `/favorites/${projectId}/`,
        method: 'POST',
      }),
      invalidatesTags: ['Favorites'],
    }),

    // إزالة مشروع من المفضلة
    removeFromFavorites: builder.mutation({
      query: (projectId) => ({
        url: `/favorites/${projectId}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Favorites'],
    }),

  }),
});

export const {
  useGetFavoritesQuery,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} = favoritesApi;