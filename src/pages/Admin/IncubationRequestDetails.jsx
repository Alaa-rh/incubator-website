import React from "react";
// import { useParams } from "react-router-dom";
import InfoRow from "../../components/InfoRow";
// import { useGetIncubationRequestQuery } from "../../api/endpoints/incubationApi";

const IncubationRequestDetails = () => {
  // const { id } = useParams();

  // const { data: request, isLoading, error, refetch } = useGetIncubationRequestQuery(id);

  const requestData = {
    project_title: "منصة الشراكة الرقمية (Digital Partnership Platform)",
    editor_name: "ريم العلي",
    product_type: "منصة برمجية (SaaS) وتطبيق ويب",
    owner_name: "ريم فهد العلي",
    phone: "0987123456",
    specialization: "مهندسة برمجيات",
    email: "reem.alali@example.com",
    team: [
      { name: "ريم العلي", email: "reem.alali@example.com" },
      { name: "أحمد محمد", email: "reem.alali@example.com" },
      { name: "سارة محمود", email: "reem.alali@example.com" },
    ],
      idea_title: "منصة ربط المشاريع الناشئة بالمستشارين والمتطوعين في مجال الذكاء الاصطناعي.",
      target_audience: "students",
      description: "بناء منصة SaaS لتقديم خدمة مطابقة ذكية (Smart Matching) تربط الشركات الناشئة التي تحتاج إلى تطوير حلول الذكاء الاصطناعي (AI) بالخبراء المستعدين لتقديم خدماتهم بالساعة أو مقابل حصة بسيطة.",
      problem: "المشكلة التي يحلها المشروع",
      duration: "6 أشهر",
  };

  // استخدام البيانات من API إذا وجدت، وإلا استخدام الثابتة
  const request = requestData;
  // const isLoading = false;
  // const error = null;

  // if (isLoading) {
  //   return (
  //     <div className="bg-white-color w-full min-h-screen pt-5">
  //       <div className="container text-center py-20">
  //         <p className="text-gray-500">جاري تحميل طلب الاحتضان...</p>
  //       </div>
  //     </div>
  //   );
  // }

  
  // if (error) {
  //   return (
  //     <div className="bg-white-color w-full min-h-screen pt-5">
  //       <div className="container text-center py-20">
  //         <p className="text-red-500 mb-3">حدث خطأ في تحميل طلب الاحتضان</p>
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
    <div className="bg-white-color w-full min-h-screen pt-5">
      <div className="container">
        {/* عنوان الصفحة */}
        <h1 className="text-2xl text-second-color font-bold mb-6">طلب الاحتضان</h1>

        {/* القسم الأول: معلومات عامة */}
        <div className="bg-white shadow-lg p-4 rounded-lg mb-4">
          <InfoRow label="اسم المشروع:">
            {request.project_title}
          </InfoRow>

          <InfoRow label="مسؤول التعديل (الثاني):">
            {request.editor_name}
          </InfoRow>

          <InfoRow label="نوع المنتج:">
            {request.product_type}
          </InfoRow>
        </div>

        {/* القسم الثاني: معلومات شخصية */}
        <div className="bg-white shadow-lg p-4 rounded-lg mb-4">
          <h2 className="border-b border-second-color text-xl font-bold mb-4">1. معلومات شخصية وقيادية</h2>
          
          <InfoRow label="الاسم:">
            {request.owner_name}
          </InfoRow>

          <InfoRow label="رقم الهاتف:">
            {request.phone}
          </InfoRow>

          <InfoRow label="الاختصاص:">
            {request.specialization}
          </InfoRow>

          <InfoRow label="البريد الإلكتروني:">
            {request.email}
          </InfoRow>
        </div>

        {/* القسم الثالث: أعضاء الفريق */}
        <div className="bg-white shadow-lg p-4 rounded-lg mb-4">
          <h2 className="border-b border-second-color text-xl font-bold mb-4">2. أعضاء الفريق</h2>
          
          {request.team?.length === 0 ? (
            <p className="text-gray-500 text-center py-4">لا يوجد أعضاء فريق</p>
          ) : (
            request.team?.map((member, index) => (
              <InfoRow key={index} label={`${member.name}:`}>
                {member.email}
              </InfoRow>
            ))
          )}
        </div>

        {/* القسم الرابع: معلومات الفكرة */}
        <div className="bg-white shadow-lg p-4 rounded-lg mb-2">
          <h2 className="border-b border-second-color text-xl font-bold mb-4">3. معلومات عن الفكرة</h2>
          <InfoRow label="عنوان الفكرة:">
            {request.idea_title}
          </InfoRow>

          <InfoRow label="القطاع المستهدف:">
            {request.target_audience}
          </InfoRow>

          <InfoRow label="وصف مختصر للفكرة:">
            {request.description}
          </InfoRow>

          <InfoRow label="المشكلة التي يحلها:">
            {request.problem}
          </InfoRow>

          <InfoRow label="الوقت المتوقع للإنجاز:">
            {request.duration}
          </InfoRow>
        </div>
      </div>
    </div>
  );
};

export default IncubationRequestDetails;