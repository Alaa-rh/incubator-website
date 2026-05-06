import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";

// import { useGetExhibitionsListQuery } from "../../api/endpoints/exhibitionApi";

export default function ExhibitionRecord() {
  const navigate = useNavigate();

  // const { data: exhibitionsFromApi, isLoading, error, refetch } = useGetExhibitionsListQuery();

 
  const exhibitionsData = [
    {
      id: 1,
      title: "معرض خريجي دفعة 2024",
      date: "12/3/2024",
      projects_count: 30,
      year: 2024,
    },
    {
      id: 2,
      title: "معرض خريجي دفعة 2023",
      date: "10/3/2023",
      projects_count: 28,
      year: 2023,
    },
    {
      id: 3,
      title: "معرض خريجي دفعة 2022",
      date: "15/3/2022",
      projects_count: 25,
      year: 2022,
    },
    {
      id: 4,
      title: "معرض خريجي دفعة 2021",
      date: "20/3/2021",
      projects_count: 22,
      year: 2021,
    },
  ];

  // استخدام البيانات الثابتة حالياً
  const exhibitions = exhibitionsData;
  // const isLoading = false;
  // const error = null;

  // معالجة شكل البيانات إذا كانت من API
  let exhibitionsList = Array.isArray(exhibitions) ? exhibitions : [];
  if (exhibitions?.results && Array.isArray(exhibitions.results)) {
    exhibitionsList = exhibitions.results;
  }
  if (exhibitions?.data && Array.isArray(exhibitions.data)) {
    exhibitionsList = exhibitions.data;
  }

  const openDetails = (ex) => {
    navigate("/projectspage", { state: { year: ex.year } });
  };


  // if (isLoading) {
  //   return (
  //     <div className="p-6" dir="rtl">
  //       <h2 className="text-xl font-bold mb-6 text-main-color">سجل المعارض</h2>
  //       <div className="flex flex-col gap-4">
  //         {[1, 2, 3].map((i) => (
  //           <div key={i} className="bg-teal-100 shadow-md rounded-xl px-4 py-6 h-28 animate-pulse"></div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  // TODO: بعد الربط شغلي حالة الخطأ
  // if (error) {
  //   return (
  //     <div className="p-6" dir="rtl">
  //       <h2 className="text-xl font-bold mb-6 text-main-color">سجل المعارض</h2>
  //       <div className="text-center py-10">
  //         <p className="text-red-500 mb-3">حدث خطأ في تحميل المعارض</p>
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
      <h2 className="text-xl font-bold mb-6 text-main-color">سجل المعارض</h2>

      {exhibitionsList.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          لا توجد معارض سابقة
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {exhibitionsList.map((ex) => (
            <div
              key={ex.id}
              className="bg-teal-100 shadow-md rounded-xl px-4 py-6 border-dotted border-2 border-main-color flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="font-bold text-lg">{ex.title}</p>
                <p className="mt-1">
                  تاريخ الانعقاد: <span className="font-semibold">{ex.date}</span>
                </p>
                <p className="mt-1">
                  عدد المشاريع المخرجة:{" "}
                  <span className="font-semibold">{ex.projects_count}</span>
                </p>
              </div>

              <Button
                label="عرض التفاصيل"
                onClick={() => openDetails(ex)}
                className="mt-4 md:mt-0 bg-main-color"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}