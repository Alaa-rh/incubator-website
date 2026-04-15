import { apiSlice } from "./apiSlice";

export const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // 1) إرسال رسالة "تواصل معنا"
    sendContactMessage: builder.mutation({
      query: (data) => ({
        url: "contact/send/",   // ← لاحقاً نعدّل الرابط حسب الباك
        method: "POST",
        body: data,
      }),
    }),

    // 2) (اختياري) جلب أنواع الاستفسارات من الباك
    getInquiryTypes: builder.query({
      query: () => "contact/inquiries/", // ← إذا الباك بيدعمها
    }),

  }),
});

export const {
  useSendContactMessageMutation,
  useGetInquiryTypesQuery,
} = contactApi;
