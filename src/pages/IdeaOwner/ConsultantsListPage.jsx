import React from "react";
import { useParams } from "react-router-dom";
import ConsultantsList from "../../components/ConsultantsList";
import avatar from "../../assets/images/avatar.jpg";
// import { useGetConsultantsBySpecialtyQuery } from "../../api/endpoints/consultantsApi";

const ConsultantsListPage = () => {
  const { categoryId } = useParams();

  // TODO: بعد الربط هذا السطر بدل البيانات الثابتة
  // const { data: consultants, isLoading, error, refetch } = useGetConsultantsBySpecialtyQuery(categoryId);

  const consultantsData = [
    {
      id: 1,
      name: "رانيا الأحمد",
      specialty: "uiux",
      activeTime: "2:00pm إلى 4:00pm",
      image: avatar,
    },
    {
      id: 2,
      name: "محمد العلي",
      specialty: "legal",
      activeTime: "1:00pm إلى 3:00pm",
      image: avatar,
    },
    {
      id: 3,
      name: "سارة خالد",
      specialty: "marketing",
      activeTime: "11:00am إلى 1:00pm",
      image: avatar,
    },
  ];

  // تصفية المستشارين بحسب الاختصاص (للبيانات الثابتة)
  const filteredConsultants = consultantsData.filter(
    (c) => c.specialty === categoryId
  );

  // TODO: بعد الربط  هذا الكود بدل الـ filteredConsultants
  // const consultants = consultants?.data || [];

  // if (isLoading) {
  //   return (
  //     <div className="container py-6">
  //       <p className="text-center text-gray-500 mt-20">جاري تحميل المستشارين...</p>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="container py-6">
  //       <p className="text-center text-red-500 mt-20">حدث خطأ في تحميل المستشارين</p>
  //       <button 
  //         onClick={refetch}
  //         className="bg-main-color text-white px-4 py-2 rounded mt-4 mx-auto block"
  //       >
  //         إعادة المحاولة
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div className="container py-6">
      <h2 className="text-xl font-bold mb-4 text-second-color">
        المستشارون المتاحون في اختصاص: {categoryId}
      </h2>

      {filteredConsultants.length > 0 ? (
        <ConsultantsList consultants={filteredConsultants} />
      ) : (
        <p className="text-gray-500 font-semibold">
          لا يوجد مستشارون لهذا الاختصاص حالياً.
        </p>
      )}
    </div>
  );
};

export default ConsultantsListPage;