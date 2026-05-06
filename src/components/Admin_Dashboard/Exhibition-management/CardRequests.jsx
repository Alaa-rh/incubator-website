import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";
import avatar from "../../../assets/images/avatar.jpg";

// import { useGetExhibitionCardRequestsQuery } from "../../api/endpoints/exhibitionApi";

export default function CardRequests() {
  const navigate = useNavigate();

  // const { data: requestsFromApi, isLoading, error, refetch } = useGetExhibitionCardRequestsQuery();

  const requestsData = [
    {
      id: 1,
      owner_name: "رانيا الأحمد",
      project_name: "منصة تعليمية",
      owner_image: avatar,
    },
    {
      id: 2,
      owner_name: "محمد السالم",
      project_name: "تطبيق توصيل",
      owner_image: avatar,
    },
    {
      id: 3,
      owner_name: "سارة خالد",
      project_name: "منصة إلكترونية",
      owner_image: avatar,
    },
  ];

  // استخدام البيانات الثابتة حالياً
  const requests = requestsData;
  // const isLoading = false;
  // const error = null;

  // معالجة شكل البيانات إذا كانت من API
  let requestsList = Array.isArray(requests) ? requests : [];
  if (requests?.results && Array.isArray(requests.results)) {
    requestsList = requests.results;
  }
  if (requests?.data && Array.isArray(requests.data)) {
    requestsList = requests.data;
  }

  const openDetails = (id) => {
    navigate(`/requests-details/${id}`);
  };

  // if (isLoading) {
  //   return (
  //     <div className="p-6" dir="rtl">
  //       <h2 className="text-xl font-bold mb-6">طلبات البطاقات</h2>
  //       <div className="grid grid-cols-2 gap-4">
  //         {[1, 2, 3].map((i) => (
  //           <div key={i} className="shadow-md rounded border border-second-color p-4 h-32 animate-pulse bg-gray-100"></div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }


  // if (error) {
  //   return (
  //     <div className="p-6" dir="rtl">
  //       <h2 className="text-xl font-bold mb-6">طلبات البطاقات</h2>
  //       <div className="text-center py-10">
  //         <p className="text-red-500 mb-3">حدث خطأ في تحميل الطلبات</p>
  //         <button
  //           onClick={refetch}
  //           className="bg-main-color text-white px-4 py-2 rounded"
  //         >
  //           إعادة المحاولة
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="p-6" dir="rtl">
      <h2 className="text-xl font-bold mb-6">طلبات البطاقات</h2>

      {requestsList.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          لا توجد طلبات بطاقات حالياً
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {requestsList.map((req) => (
            <div
              key={req.id}
              className="shadow-md rounded border border-second-color p-4 flex items-center gap-4"
            >
              <img
                src={req.owner_image || avatar}
                alt={req.owner_name}
                className="w-20 h-20 rounded-full object-cover border border-second-color"
              />

              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg">{req.owner_name}</p>
                <p className="text-sm mt-1">
                  اسم المشروع: <span className="font-semibold">{req.project_name}</span>
                </p>

                <Button
                  label="عرض التفاصيل"
                  onClick={() => openDetails(req.id)}
                  className="bg-main-color"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}