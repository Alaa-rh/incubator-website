import React from "react";
import InfoRow from "../../components/InfoRow";

const IncubationRequestDetails = () => {
  // مثال بيانات جاهز
  const request = {
    projectName: "منصة الشراكة الرقمية (Digital Partnership Platform)",
    editor: "ريم العلي",
    productType: "منصة برمجية (SaaS) وتطبيق ويب",

    personal: {
      name: "ريم فهد العلي",
      phone: "0987123456",
      major: "مهندسة برمجيات",
      email: "reem.alali@example.com",
    },

    team: [
      { name: "ريم العلي", email: "reem.alali@example.com" },
      { name: "أحمد محمد", email: "reem.alali@example.com" },
      { name: "سارة محمود", email: "reem.alali@example.com" },
    ],

    idea: {
      title:
        "منصة ربط المشاريع الناشئة بالمستشارين والمتطوعين في مجال الذكاء الاصطناعي.",
      sector: "التقنية المالية (FinTech) والتجارة الإلكترونية",
      description:
        "بناء منصة SaaS لتقديم خدمة مطابقة ذكية (Smart Matching) تربط الشركات الناشئة التي تحتاج إلى تطوير حلول الذكاء الاصطناعي (AI) بالخبراء المستعدين لتقديم خدماتهم بالساعة أو مقابل حصة بسيطة.",
      problem: "المشكلة التي يحلها المشروع",
      duration: "6 أشهر",
    },
  };

  return (
    <div className="bg-white-color w-full h-min-screen pt-5">
        <div className="container">

      {/* عنوان الصفحة */}
      <h1 className="text-2xl text-second-color font-bold mb-6">طلب الاحتضان</h1>

      {/* القسم الأول: معلومات عامة */}
      <div className="bg-white shadow-lg p-4 rounded-lg mb-4">
        <InfoRow label="اسم المشروع:">
          {request.projectName}
        </InfoRow>

        <InfoRow label="مسؤول التعديل (الثاني):">
          {request.editor}
        </InfoRow>

        <InfoRow label="نوع المنتج:">
          {request.productType}
        </InfoRow>
      </div>

      {/* القسم الثاني: معلومات شخصية */}
      <div className="bg-white shadow-lg p-4 rounded-lg mb-4">
      <h2 className="border-b border-second-color text-xl font-bold mb-4">1. معلومات شخصية وقيادية</h2>
        <InfoRow label="الاسم:">
          {request.personal.name}
        </InfoRow>

        <InfoRow label="رقم الهاتف:">
          {request.personal.phone}
        </InfoRow>

        <InfoRow label="الاختصاص:">
          {request.personal.major}
        </InfoRow>

        <InfoRow label="البريد الإلكتروني:">
          {request.personal.email}
        </InfoRow>
      </div>

      {/* القسم الثالث: أعضاء الفريق */}
      <div className="bg-white shadow-lg p-4 rounded-lg mb-4">
      <h2 className="border-b border-second-color text-xl font-bold mb-4">2. أعضاء الفريق</h2>
        {request.team.map((member, index) => (
          <InfoRow key={index} label={`${member.name}:`}>
            {member.email}
          </InfoRow>
        ))}
      </div>

      {/* القسم الرابع: معلومات الفكرة */}
      <div className="bg-white shadow-lg p-4 rounded-lg mb-2">
      <h2 className="border-b border-second-color text-xl font-bold mb-4">3. معلومات عن الفكرة</h2>
        <InfoRow label="عنوان الفكرة:">
          {request.idea.title}
        </InfoRow>

        <InfoRow label="القطاع المستهدف:">
          {request.idea.sector}
        </InfoRow>

        <InfoRow label="وصف مختصر للفكرة:">
          {request.idea.description}
        </InfoRow>

        <InfoRow label="المشكلة التي يحلها:">
          {request.idea.problem}
        </InfoRow>

        <InfoRow label="الوقت المتوقع للإنجاز:">
          {request.idea.duration}
        </InfoRow>
      </div>
    </div>
    </div>
  );
};

export default IncubationRequestDetails;
